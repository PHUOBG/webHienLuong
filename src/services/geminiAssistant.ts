import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sources?: { title: string; route: string; note: string }[];
}

const SYSTEM_INSTRUCTION = `Bạn là "Hư Lão Số AI" — Hiện thân số của một vị Bô Lão Tri Thức uyên thâm, đôn hậu của Làng Rèn Cổ Hiền Lương, bên dòng sông Bồ hiền hòa, xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế.
Nhiệm vụ của bạn là giải đáp cho con cháu muôn phương, lữ khách, và các nhà nghiên cứu về:
1. Lịch sử hơn 500 năm lập làng từ thời vua Lê Thánh Tông (thế kỷ XV), công đức cụ Thủy tổ Hoàng Đình Chèm di cư từ Hoằng Hóa (Thanh Hóa) vào Thuận Hóa.
2. Quần thể 9 xóm rèn truyền thống: Xóm Dao, Xóm Rựa, Xóm Cuốc, Xóm Kéo, Xóm Dao Bếp, Xóm Bễ Lò, Xóm Liềm, Xóm Lưỡi Cày, Xóm Đập Búa.
3. Kỹ nghệ trui tôi thép độc nhất vô nhị bằng nước bùn non Sông Bồ tạo độ dẻo quánh, độ cứng 58-60 HRC, không sứt mẻ.
4. Quần thể tâm linh: Chùa Cổ Giác Lương Tự (Di tích Quốc gia 1992, dựng năm 1774), Nhà Thờ Tổ Nghề Rèn với bức hoành phi "Nghiệp Lưu Tổ Đức", ngày giỗ Tổ 18 tháng 2 Âm lịch.
5. Nghệ nhân tiêu biểu: Cụ Trương Văn Bổn, Nghệ nhân Hoàng Văn Ứng, Anh Hoàng Văn Thắng, Bác Thợ Rèn Kỷ Cựu.
6. Cộng đồng Hàng Kỉnh: tinh thần tương thân tương ái, khuyến học và kết nối con cháu làng rèn khắp mọi miền.

Giọng điệu: Ấm áp, từ tốn, đậm chất Huế cổ kính, giàu lòng tự hào làng nghề nhưng chính xác, tôn trọng lịch sử và có căn cứ. Khi trả lời, hãy gợi ý dẫn nguồn hoặc các khu vực tham quan cụ thể trong làng.`;

// Local fallback knowledge answers if API key is unconfigured
const KNOWLEDGE_RESPONSES: Record<string, { text: string; sources: { title: string; route: string; note: string }[] }> = {
  'lich-su': {
    text: `Chào cháu! Về nguồn cội làng rèn ta, sử tích và gia phả các họ ghi rõ: Vào nửa cuối thế kỷ XV dưới thời vua Lê Thánh Tông, cụ Thủy tổ Hoàng Đình Chèm (quê gốc Hoằng Hóa, Thanh Hóa) theo bước tiền nhân vào Thuận Hóa khai hoang. Cụ đã chọn vùng bãi bồi trù phú bên hữu ngạn dòng sông Bồ làm nơi cắm sào lập nghiệp, mang theo bí quyết luyện kim truyền thụ cho con cháu.

Trải qua hơn nửa thiên niên kỷ, ngọn lửa lò rèn Hiền Lương chưa bao giờ tắt. Từ nông cụ canh tác mở cõi đến vũ khí hộ quốc thời triều Nguyễn, người thợ rèn Hiền Lương luôn tự hào với đôi bàn tay sắt đá phụng sự non sông.`,
    sources: [
      { title: 'Giới Thiệu Về Làng Rèn Hiền Lương', route: 'gioi-thieu', note: 'Lịch sử khai lập thế kỷ XV & Thủy tổ Hoàng Đình Chèm' },
      { title: 'Quần Thể Di Tích Chùa Giác Lương & Nhà Thờ Tổ', route: 'di-tich', note: 'Xếp hạng Di tích Quốc gia năm 1992' }
    ]
  },
  'cong-doan': {
    text: `Cháu hỏi rất đúng tinh hoa nghề! Quy trình rèn dao kéo Hiền Lương gồm 5 công đoạn nghiêm ngặt:
1. **Chọn & Cắt Phôi Thép:** Phân loại thép nhíp đàn hồi cao hoặc thép thanh đặc chủng.
2. **Nung Than Muồng (850°C – 1.000°C):** Thụt bễ đều nhịp, canh than rực sắc "hoa đào" hồng cam chín thấu ruột sắt.
3. **Quai Búa Song Gia:** Thợ cả gõ búa con 1kg dẫn đường, thợ phụ quai búa tạ 6kg giáng xuống nén sít các hạt kim loại.
4. **Mài Bén & Cân Lưỡi:** Giũa sống dao thẳng tắp, vát mép 18-22 độ, mài bóng bằng đá bùn nước.
5. **Tôi Thép Bằng Nước Bùn Non Sông Bồ:** Bí thuật tạo nên độ đanh cứng 58-60 HRC mà ruột vẫn dẻo mềm, chém sắt ngọt lịm không quằn mẻ.`,
    sources: [
      { title: 'Quy Trình 5 Công Đoạn Nghề Rèn Hiền Lương', route: 'quy-trinh-nghe', note: 'Chi tiết từng bước kỹ nghệ lửa và đe búa' },
      { title: 'Bài viết: Bí quyết tôi thép bùn non sông Bồ', route: 'tin-tuc-chi-tiet', note: 'Phân tích khoa học và thực nghiệm dân gian' }
    ]
  },
  'hang-kinh': {
    text: `Hàng Kỉnh là một tổ chức cộng đồng truyền thống thiêng liêng và đáng quý của làng Hiền Lương ta! 
"Kỉnh" nghĩa là kính trọng, tương ái. Hàng Kỉnh là hội đồng con cháu và những người con làng rèn sống xa quê (Gia Lai, Đắk Lắk, TP.HCM, nước ngoài...) cùng nhau quyên góp quỹ khuyến học, hỗ trợ các gia đình già yếu, trùng tu di tích nhà thờ tổ và gìn giữ lễ giỗ 18 tháng 2 âm lịch.

Hàng Kỉnh là sợi dây vô hình mà bền chặt, để người đi xa vẫn nghe thấy tiếng đe búa reo vui gọi về tổ tiên.`,
    sources: [
      { title: 'Các Dòng Họ & Cộng Đồng Hàng Kỉnh', route: 'cac-dong-ho', note: 'Tổ chức cộng đồng và quỹ tương thân tương ái' },
      { title: 'Đóng góp tư liệu & Ký ức làng rèn', route: 'thu-vien-anh', note: 'Lưu trữ đóng góp của kiều bào và con cháu' }
    ]
  },
  'dong-ho': {
    text: `Tại Hiền Lương, các dòng họ lớn như họ Hoàng (Hoàng Đình, Hoàng Văn), họ Trương, họ Nguyễn, họ Lê đã cùng nhau khai canh, lập ấp và duy trì 9 xóm rèn. Mỗi dòng họ đều có nhà thờ phái và gia phả ghi chép cẩn trọng công đức tiền hiền.

Vì sự tôn trọng quyền riêng tư gia đình, website làng chỉ công bố các tư liệu di tích công cộng và công đức Thủy tổ, không đưa số điện thoại hay thông tin nhân thân riêng tư lên không gian mạng. Cháu có thể về làng vào dịp 18/2 âm lịch để được các cụ trưởng họ tiếp đón ân cần.`,
    sources: [
      { title: 'Không Gian Di Tích & Nhà Thờ Họ', route: 'di-tich', note: 'Nơi phụng thờ các bậc tiền hiền' },
      { title: 'Nghệ Nhân Làng Rèn Các Dòng Tộc', route: 'nghe-nhan', note: 'Chân dung các nghệ nhân họ Hoàng, Trương' }
    ]
  }
};

export async function askHuLaoAi(prompt: string): Promise<{ text: string; sources?: { title: string; route: string; note: string }[] }> {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ? process.env.GEMINI_API_KEY : '';
  const lowerPrompt = prompt.toLowerCase();

  // Try real Gemini AI if key exists and is not placeholder
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const text = response.text || '';
      return {
        text,
        sources: [
          { title: 'Hồ sơ Di sản Làng Rèn Hiền Lương', route: 'gioi-thieu', note: 'Tư liệu BQL Di tích Làng Nghề Sông Bồ' },
          { title: 'Quy trình công nghệ luyện rèn dân gian', route: 'quy-trinh-nghe', note: 'Di sản phi vật thể Cố Đô' }
        ]
      };
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local heritage knowledge:', err);
    }
  }

  // Fallback to rich historical knowledge base
  if (lowerPrompt.includes('lịch sử') || lowerPrompt.includes('khai lập') || lowerPrompt.includes('cụ hoàng') || lowerPrompt.includes('nguồn gốc') || lowerPrompt.includes('năm trăm')) {
    return KNOWLEDGE_RESPONSES['lich-su'];
  }
  if (lowerPrompt.includes('công đoạn') || lowerPrompt.includes('rèn') || lowerPrompt.includes('tôi thép') || lowerPrompt.includes('nước bùn') || lowerPrompt.includes('búa') || lowerPrompt.includes('nhiệt')) {
    return KNOWLEDGE_RESPONSES['cong-doan'];
  }
  if (lowerPrompt.includes('hàng kỉnh') || lowerPrompt.includes('kỉnh') || lowerPrompt.includes('cộng đồng') || lowerPrompt.includes('xa quê') || lowerPrompt.includes('khuyến học')) {
    return KNOWLEDGE_RESPONSES['hang-kinh'];
  }
  if (lowerPrompt.includes('dòng họ') || lowerPrompt.includes('gia phả') || lowerPrompt.includes('hoàng') || lowerPrompt.includes('trương')) {
    return KNOWLEDGE_RESPONSES['dong-ho'];
  }

  return {
    text: `Chào cháu! Ta là Hư Lão Số AI của làng rèn Hiền Lương. Cháu vừa hỏi: "${prompt}".

Ở làng ta bên dòng sông Bồ, ngọn lửa đã đỏ hơn 500 năm. Từ kỹ thuật chọn thép phôi, thụt bễ than củi, đập búa hiệp đồng đến bí quyết tôi thép nước bùn non Sông Bồ độc nhất vô nhị. Quần thể Chùa Giác Lương Tự (1774) và Nhà Thờ Tổ Nghề Rèn luôn mở rộng cửa đón chào lữ khách hành hương về đất tổ.

Cháu có thể chọn các đề mục bên dưới hoặc hỏi ta cụ thể về lịch sử lập làng, 5 bước tôi bùn non, hay các nghệ nhân lão thành nhé!`,
    sources: [
      { title: 'Khám phá Làng Rèn Hiền Lương', route: 'gioi-thieu', note: 'Tổng quan lịch sử và văn hóa' },
      { title: 'Thư viện tư liệu ảnh', route: 'thu-vien-anh', note: '120+ hình ảnh hiện vật số hóa' }
    ]
  };
}
