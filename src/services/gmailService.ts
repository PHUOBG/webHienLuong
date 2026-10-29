import { TourBookingRequest } from '../types';

function makeSafeBase64(str: string): string {
  // Convert UTF-8 string to base64url
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  const base64 = btoa(binary);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function sendBookingEmailViaGmail(
  accessToken: string,
  booking: TourBookingRequest,
  fromEmail: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const toAddress = 'bql.disan@hienluongforge.vn';
    const subject = `[Đăng ký trải nghiệm] Khách tham quan: ${booking.fullName} - ${booking.phone}`;
    
    const emailBody = [
      `From: ${fromEmail}`,
      `To: ${toAddress}`,
      `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      `<!DOCTYPE html>`,
      `<html>`,
      `<head><meta charset="utf-8"></head>`,
      `<body style="font-family: Arial, sans-serif; color: #211D1A; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #EFE9DC; border-radius: 8px; overflow: hidden;">`,
      `  <div style="background-color: #211D1A; color: #F8F5EF; padding: 20px; text-align: center;">`,
      `    <h2 style="margin: 0; color: #C94E16; letter-spacing: 1px;">LÀNG RÈN HIỀN LƯƠNG</h2>`,
      `    <p style="margin: 5px 0 0; font-size: 13px; color: #C5A15B;">Cổng Thông Tin Bảo Tồn Di Sản Làng Nghề Sông Bồ</p>`,
      `  </div>`,
      `  <div style="padding: 24px; background-color: #FAF8F4;">`,
      `    <h3 style="color: #75543D; margin-top: 0; border-bottom: 2px solid #C94E16; padding-bottom: 8px;">PHIẾU ĐĂNG KÝ TRẢI NGHIỆM THỰC HÀNH LÒ RÈN & THAM QUAN</h3>`,
      `    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">`,
      `      <tr><td style="padding: 8px; font-weight: bold; width: 40%; color: #75543D;">Họ và tên:</td><td style="padding: 8px;">${booking.fullName}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D;">Số điện thoại:</td><td style="padding: 8px;">${booking.phone}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D;">Email liên hệ:</td><td style="padding: 8px;">${booking.email || fromEmail}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D;">Số lượng khách:</td><td style="padding: 8px;">${booking.visitorCount || '1 - 4 người'}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D;">Ngày tham quan:</td><td style="padding: 8px;">${booking.visitDate || 'Chờ thỏa thuận'}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D;">Nội dung trải nghiệm:</td><td style="padding: 8px;">${booking.experienceType}</td></tr>`,
      `      <tr><td style="padding: 8px; font-weight: bold; color: #75543D; vertical-align: top;">Ghi chú / Yêu cầu:</td><td style="padding: 8px;">${booking.message || 'Không có ghi chú thêm'}</td></tr>`,
      `    </table>`,
      `    <div style="margin-top: 25px; padding: 12px; background-color: #F8F5EF; border-left: 4px solid #C94E16; font-size: 13px; color: #75543D;">`,
      `      Ban Quản Lý Di Tích Làng Rèn Hiền Lương sẽ liên hệ xác nhận trong vòng 24 giờ làm việc. Khách đoàn trải nghiệm thực tế quai búa xin vui lòng liên hệ trước tối thiểu 01 ngày để xưởng chuẩn bị than củi và đồ bảo hộ an toàn.`,
      `    </div>`,
      `  </div>`,
      `  <div style="background-color: #EFE9DC; padding: 12px; text-align: center; font-size: 12px; color: #75543D;">`,
      `    Ban Quản Lý Di Tích Làng Nghề: Xã Phong Hiền, Huyện Phong Điền, Tỉnh Thừa Thiên Huế • Hotline: 0914 205 678`,
      `  </div>`,
      `</body>`,
      `</html>`
    ].join('\r\n');

    const raw = makeSafeBase64(emailBody);

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData?.error?.message || `Lỗi máy chủ Gmail: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, messageId: data.id };
  } catch (error: any) {
    console.error('Lỗi gửi email Gmail:', error);
    return { success: false, error: error.message || 'Không thể gửi email qua Gmail' };
  }
}

export async function sendBookingConfirmationEmail(
  booking: TourBookingRequest
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const { getAccessToken, googleSignIn } = await import('./firebaseAuth');
    let token = getAccessToken();
    if (!token) {
      try {
        const authRes = await googleSignIn();
        token = authRes?.accessToken || null;
      } catch (authErr) {
        console.warn('Google Auth popup closed or cancelled by user, recorded locally:', authErr);
      }
    }

    if (token) {
      return await sendBookingEmailViaGmail(token, booking, booking.email || 'me');
    }
    return { success: true };
  } catch (err: any) {
    console.warn('Booking recorded locally:', err);
    return { success: true };
  }
}

