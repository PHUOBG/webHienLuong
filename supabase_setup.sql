-- ==============================================================================
-- CƠ SỞ DỮ LIỆU LÀNG RÈN HIỀN LƯƠNG (HIEN LUONG VILLAGE HERITAGE)
-- Tạo bảng & nạp sẵn dữ liệu thực tế cho Supabase
-- ==============================================================================

-- 1. BẢNG ĐẶT LỊCH THAM QUAN & TRẢI NGHIỆM LÒ RÈN (BOOKINGS)
CREATE TABLE IF NOT EXISTS public.bookings (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    visitor_count TEXT DEFAULT '1 - 4 người',
    visit_date DATE,
    experience_type TEXT DEFAULT 'Tham quan di tích & Trải nghiệm quai búa lò rèn',
    message TEXT,
    status TEXT DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. BẢNG LIÊN HỆ & GÓP Ý (CONTACTS)
CREATE TABLE IF NOT EXISTS public.contacts (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. BẢNG SẢN PHẨM RÈN TRUYỀN THỐNG (PRODUCTS)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    hardness TEXT NOT NULL,
    description TEXT,
    dimensions TEXT,
    weight TEXT,
    material TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. BẢNG NGHỆ NHÂN LÀNG RÈN (ARTISANS)
CREATE TABLE IF NOT EXISTS public.artisans (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    age INT,
    badge TEXT,
    experience TEXT,
    workshop TEXT,
    bio TEXT,
    specialty TEXT,
    image TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. BẢNG DI TÍCH LỊCH SỬ & TÂM LINH (HISTORIC_SITES)
CREATE TABLE IF NOT EXISTS public.historic_sites (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    period TEXT,
    description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    image TEXT,
    image_caption TEXT,
    gallery JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. BẢNG BÀI VIẾT & TIN TỨC DI SẢN (ARTICLES)
CREATE TABLE IF NOT EXISTS public.articles (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    date TEXT,
    views INT DEFAULT 0,
    author TEXT,
    cover_image TEXT,
    cover_caption TEXT,
    summary TEXT,
    content_paragraphs JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 7. BẢNG THƯ VIỆN ẢNH (GALLERY_ITEMS)
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id TEXT PRIMARY KEY,
    code TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    category_label TEXT,
    image TEXT NOT NULL,
    caption TEXT,
    meta TEXT,
    attribution TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================================================
-- BẢO MẬT ROW LEVEL SECURITY (RLS) - Cho phép đọc công khai và gửi đơn đặt
-- ==============================================================================
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artisans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.historic_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

-- Cho phép khách truy cập web xem dữ liệu công khai:
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public Read Products" ON public.products;
    CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Public Read Artisans" ON public.artisans;
    CREATE POLICY "Public Read Artisans" ON public.artisans FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Public Read Historic Sites" ON public.historic_sites;
    CREATE POLICY "Public Read Historic Sites" ON public.historic_sites FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Public Read Articles" ON public.articles;
    CREATE POLICY "Public Read Articles" ON public.articles FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Public Read Gallery" ON public.gallery_items;
    CREATE POLICY "Public Read Gallery" ON public.gallery_items FOR SELECT USING (true);

    -- Cho phép khách gửi đơn đặt tour / trải nghiệm và liên hệ:
    DROP POLICY IF EXISTS "Public Insert Bookings" ON public.bookings;
    CREATE POLICY "Public Insert Bookings" ON public.bookings FOR INSERT WITH CHECK (true);

    DROP POLICY IF EXISTS "Public Insert Contacts" ON public.contacts;
    CREATE POLICY "Public Insert Contacts" ON public.contacts FOR INSERT WITH CHECK (true);
END $$;

-- ==============================================================================
-- NẠP DỮ LIỆU MẪU (SEED DATA)
-- ==============================================================================

-- 1. Sản phẩm rèn
INSERT INTO public.products (id, name, category, hardness, description, dimensions, weight, material)
VALUES
('dao-phay', 'Dao Phay Chặt Xương Cố Đô', 'Bếp & Nông nghiệp', '59 HRC', 'Sống dao dày 5mm, bề mặt đập vảy cá truyền thống chống bám dính thịt, độ cân bằng trọng tâm hoàn hảo khi bổ chặt.', 'Dài: 32 cm • Nặng: 650g', '650g', 'Thép nhíp tôi bùn non Sông Bồ'),
('rua-cong', 'Rựa Cong Phát Cây Hiền Lương', 'Lâm nghiệp & Vườn tược', '60 HRC', 'Mũi cong móc cành chuyên dụng, sống uốn trợ lực chém đứt ngọt thân tre nứa già không bị dội ngược lực vào cổ tay.', 'Dài: 45 cm • Nặng: 580g', '580g', 'Thép ray tôi luyện than củi'),
('keo-cat-vai', 'Kéo Cắt Vải Nghệ May Huế', 'May mặc thủ công', '58 HRC', 'Hai lưỡi khép khít từng micromet, chốt đồng thau tiện tay, đường cắt lụa tơ tằm phẳng phiu không tưa mép chỉ.', 'Dài: 24 cm • Nặng: 310g', '310g', 'Lưỡi mài đá bùn mịn'),
('luoi-cay', 'Lưỡi Cày Bắp Vẹt Đồng Chiêm', 'Canh tác lúa nước', '58 HRC', 'Độ vát lật đất nhanh, chịu va chạm đá sỏi ngầm vùng đất phù sa trũng Phong Điền mà không bị biến dạng hay nứt gãy.', 'Dài: 38 cm • Nặng: 1.200g', '1.200g', 'Đúc rèn khối dẻo dai')
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name, category = EXCLUDED.category, hardness = EXCLUDED.hardness, description = EXCLUDED.description;

-- 2. Nghệ nhân làng rèn
INSERT INTO public.artisans (id, name, title, age, badge, experience, workshop, bio, specialty, image)
VALUES
('truong-van-bon', 'Cụ Trương Văn Bổn', 'Bậc Thầy Quai Búa', 72, 'BẬC THẦY QUAI BÚA', 'Thâm niên 50+ năm', 'Lò rèn Bốn Phước', 'Hơn 50 năm quai búa, sở trường định hình mắt thép ở 1000°C và rèn rựa đốn củi truyền thống lừng danh xứ Đàng Trong.', 'Định hình thép 1000°C & Canh lửa than củi', '/assets/aistudio/l_ng_4bad7b81.jpg'),
('hoang-van-ung', 'Nghệ nhân Hoàng Văn Ứng', 'Kỹ Thuật Tôi & Mài', 58, 'KỸ THUẬT TÔI & MÀI', 'Thâm niên 35+ năm', 'Lò rèn Gia Truyền họ Hoàng', 'Chuyên gia mài bén, giũa vát mép dao sắc bén, chuẩn xác từng milimet. Đôi mắt tinh anh và bàn tay điều hòa đá mài nước.', 'Mài sắc vi mô & Cân lưỡi đối xứng', '/assets/aistudio/ch_a_gi_c_l__ng_t__7a19a665.jpg'),
('hoang-van-thang', 'Anh Hoàng Văn Thắng', 'Thế Hệ Kế Thừa Thứ 4', 38, 'THẾ HỆ KẾ THỪA THỨ 4', 'Kế thừa 15+ năm', 'Lò rèn Thắng Lợi', 'Kế tục lò rèn gia truyền, áp dụng cải tiến quạt gió tiết kiệm than củi, nâng cao hiệu suất nhiệt và an toàn lao động.', 'Nhiệt luyện tiết kiệm & Cơ khí nông nghiệp cải tiến', '/assets/aistudio/RJXd0SY2RrzAyv2Clp97MmUeThHP_nOk737FO3_xpU3sfYTMEfFT_luotzmlXRC6jOhgoIJtb3YteR1wpStGthwkacwBaxn0wejvDX4TYBbvXjDEWLuZR5Wivi4I3KW5toAfDA0aWzbSLK0WYGP3oN7vHPqY3jEtsy0Z891bGSBFGVz16PR_MEo_CWpX21Iv_ef9dd9e9.jpg'),
('bac-tho-ren-ky-cuu', 'Bác Thợ Rèn Kỷ Cựu', 'Người Giữ Hồn Bễ Lò', 65, 'NGƯỜI GIỮ HỒN BỄ LÒ', 'Thâm niên 40+ năm', 'Xóm Rèn Phong Hiền', 'Hơn 40 năm gắn bó trọn vẹn với nhịp đe đập dồn dập và tiếng xì xèo khi tôi thép trong chum nước mát sông Bồ.', 'Giác ngộ âm đe & Tôi nước sông Bồ', '/assets/aistudio/ngh__r_n_trao_th__ng_45ca283d.jpg')
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name, bio = EXCLUDED.bio, specialty = EXCLUDED.specialty;

-- 3. Di tích lịch sử & tâm linh
INSERT INTO public.historic_sites (id, title, subtitle, period, description, features, image, image_caption, gallery)
VALUES
(
  'chua-giac-luong',
  'Chùa Cổ Giác Lương Tự',
  'Di Tích Kiến Trúc Nghệ Thuật Cấp Quốc Gia (Xếp hạng 23/06/1992)',
  'Khởi dựng thời Lê Trung Hưng (trên 300 năm lịch sử bảo tồn)',
  'Chùa Giác Lương là cổ tự tâm linh tiêu biểu nhất của làng rèn Hiền Lương, khởi dựng từ thời Lê Trung Hưng bởi bà Hoàng Thị Phiếu cùng các tộc trưởng trong làng ở xứ Cồn Bệ, sau dời về xóm Phước Tự (xóm Chùa) bên dòng sông Bồ. Chùa xây hướng Nam gồm 2 gian 4 chái bằng sườn gỗ lim quý chạm trổ tinh mỹ lợp ngói liệt, bao bọc bởi vòng la thành gạch cổ kính dài 79m, rộng 55,2m.',
  '["Cổng Tam quan 2 tầng đồ sộ khảm sành sứ rồng phượng tinh xảo bậc nhất xứ Huế", "Kiến trúc nhà rường 2 gian 4 chái sườn gỗ lim lợp ngói liệt truyền thống", "Đại hồng chung đúc năm 1819 (Gia Long thứ 18) khắc danh tánh các phường thợ rèn cúng dường", "La thành gạch cổ chu vi 79m x 55,2m cùng hệ thống miếu Cao Các, miếu Thượng tướng quân Trần Quý Công", "Di tích Kiến trúc Nghệ thuật cấp Quốc gia theo Quyết định 776-QĐ/BT năm 1992"]'::jsonb,
  '/assets/chua-giac-luong-tam-quan.jpg',
  'Cổng Tam quan Chùa Giác Lương – Kiệt tác nghệ thuật kiến trúc khảm sành sứ cổ kính hơn 300 năm bên bờ sông Bồ.',
  '[{"id": "cgl-tong-the", "image": "/assets/chua-giac-luong-tong-the.jpg", "title": "Toàn Cảnh Chùa Giác Lương (Góc chụp Flycam)", "caption": "Toàn cảnh quần thể di tích nhìn từ trên cao", "desc": "Trục kiến trúc đăng đối từ Cổng Tam Quan, con đường gạch đỏ dẫn qua lư hương đồng vào Chánh Điện giữa tán cây cổ thụ và các ngôi bảo tháp, lăng mộ cổ thanh tịnh ven sông Bồ."}, {"id": "cgl-chuong-dong", "image": "/assets/chua-giac-luong-chuong-dong.jpg", "title": "Bảo Vật Đại Hồng Chung Đúc Năm 1819 (Gia Long thứ 18)", "caption": "Chuông đồng cổ kính hơn 200 năm tuổi", "desc": "Đại hồng chung quý giá treo trên giá gỗ lim chạm khắc rồng phượng tinh xảo. Văn bia và chữ Hán khắc quanh chuông ghi tạc công đức cúng dường của các phường lò rèn làng Hiền Lương."}]'::jsonb
),
(
  'nha-tho-to-nghe-ren',
  'Nhà Thờ Tổ Nghề Rèn Hiền Lương (Tổ Đình Nghề Rèn)',
  'Không Gian Tâm Linh & Cội Nguồn Làng Rèn Đất Huế',
  'Khởi lập cuối thế kỷ 18 — Trùng tu phụng thờ Tổ Sư & Liệt Vị Tiên Sư',
  'Tổ Đình Nghề Rèn là không gian thiêng liêng nhất của cộng đồng phường rèn Hiền Lương, khởi đầu vào cuối thế kỷ 18 từ một ngôi nhà tranh rước thần chủ Tổ sư về thờ, sau được dân làng và các phường rèn phương Nam hỷ cúng trùng tu khang trang. Chính điện tôn thờ Tổ Sư nghề rèn — văn tế xưng tụng ngài là Tây Nhạc Kim Thiên Thuận Đế (về sau triều Nguyễn gia phong Thái Lợi Chi Thần). Nơi đây sản sinh ngài Hoàng Văn Lịch — Kỹ sư đóng tàu hơi nước đầu tiên của Việt Nam và ngài Trần Văn Đắc.',
  '["Biển đại tự TỔ ĐÌNH NGHỀ RÈN sơn son thếp vàng cùng bức hoành phi cổ Nghiệp Lưu Tổ Đức", "Mặt tiền 3 gian cổ kính với 4 cột hiên đắp nổi Rồng Vàng chầu và đôi Lân đá canh giữ thềm tam cấp", "Tôn thờ ngài Tây Nhạc Kim Thiên Thuận Đế (Thái Lợi Chi Thần) & Liệt vị Tiên Sư bách nghệ", "Vinh danh danh nhân Hoàng Văn Lịch & Trần Văn Đắc", "Chánh giỗ Tổ ngày 18 tháng Hai Âm lịch hàng năm quy tụ con cháu và hiệp hội Hàng Kỉnh"]'::jsonb,
  '/assets/to-dinh-nghe-ren-toan-canh.jpg',
  'Tổ Đình Nghề Rèn Hiền Lương – Kiến trúc 3 gian cổ kính với 4 cột rồng vàng chầu và đôi lân đá canh giữ thềm tam cấp.',
  '[{"id": "td-toan-canh", "image": "/assets/to-dinh-nghe-ren-toan-canh.jpg", "title": "Toàn Cảnh Tổ Đình Nghề Rèn Hiền Lương", "caption": "Mặt tiền 3 gian cổ kính uy nghiêm", "desc": "Mặt tiền 3 gian lợp ngói liệt, bờ nóc đắp giao long uốn lượn, 4 cột hiên đắp nổi rồng vàng chầu, hệ thống cửa gỗ lim và thềm tam cấp có đôi lân đá chầu oai nghiêm."}, {"id": "td-le-te-to", "image": "/assets/to-dinh-nghe-ren-le-te-to.jpg", "title": "Lễ Tế Tổ Sư & Vinh Danh Làng Nghề Truyền Thống", "caption": "Nghi thức vinh danh tại hiên tiền đường Tổ Đình", "desc": "Cận cảnh hàng cột rồng vàng, biển đại tự TỔ ĐÌNH NGHỀ RÈN và bức hoành phi cổ sơn son thiếp vàng Nghiệp Lưu Tổ Đức."}]'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
title = EXCLUDED.title, description = EXCLUDED.description, features = EXCLUDED.features;

-- 4. Tin tức & bài viết di sản
INSERT INTO public.articles (id, slug, title, category, date, views, author, cover_image, cover_caption, summary, content_paragraphs)
VALUES
(
  'khong-gian-di-san-500-nam',
  'khong-gian-di-san-500-nam',
  'Không gian di sản làng rèn cổ hơn 500 năm bên dòng sông Bồ',
  'LÀNG NGHỀ TRUYỀN THỐNG',
  '15/04/2024',
  4820,
  'Ban Quản Lý Di Tích',
  '/assets/aistudio/c99QpHCNl6N_8DDZTmgsVqZnAC5TtCgEA_m9CbDwYir8w59UjA3rj7UrCUfw3xOSdLq2h1TQSqTFciZoUW1Mv09wCI2MNUFvZHIUx_W1R2H61nqKZHSuVOPe91NQYLd_PAJ7zLPE2nEKXdBDTBnEzae8K01sUPw3BPkWRen8Ob7yIymJ2nPI5QAgwJHyWaZn_5e83773e.jpg',
  'Toàn cảnh không gian làng cổ Hiền Lương rợp bóng cây xanh nhìn từ trên cao — Xã Phong Hiền, huyện Phong Điền.',
  'Làng rèn Hiền Lương tọa lạc bên bờ hạ lưu sông Bồ thuộc xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế. Khởi thủy từ nửa cuối thế kỷ XV thời vua Lê Thánh Tông, đây là một trong những làng nghề thủ công kim khí cổ kính nhất miền Trung.',
  '["Trải qua hơn năm thế kỷ thăng trầm, những lò rèn nơi đây vẫn ngày đêm đỏ lửa. Sản phẩm nông cụ và dao kéo Hiền Lương nức tiếng khắp vùng nhờ độ sắc ngọt, độ dẻo dai và kỹ thuật trui thép độc nhất vô nhị bằng nguồn nước sông Bồ hòa bùn non.", "Nghệ thuật đập búa của người thợ Hiền Lương là một sự kết hợp phi thường giữa thị giác, thính giác và nhịp thở. Khi thanh sắt được nung đến màu hoa đào chừng 900-1000 độ C, người thợ cả dùng kẹp gắp ra đe, gõ nhẹ chiếc búa con 1kg để định vị điểm dập và ra hiệu cho thợ phụ vung cây búa tạ 6kg giáng xuống như sấm rền.", "Bên cạnh làng nghề, quần thể đình làng Hiền Lương và Chùa Giác Lương Tự tạo thành tam giác văn hóa tâm linh đặc sắc. Hàng năm vào ngày 18 tháng 2 Âm lịch, lễ tế Tổ sư nghề rèn được tổ chức long trọng."]'::jsonb
),
(
  'bi-quyet-toi-thep-bun-non',
  'bi-quyet-toi-thep-bun-non',
  '5 công đoạn trui thép bí truyền bằng nước bùn non sông Bồ',
  'QUY TRÌNH NGHỀ',
  '10/05/2024',
  3250,
  'Nghệ nhân Hoàng Văn Ứng',
  '/assets/aistudio/h_ng_k_nh_8f6265a8.jpg',
  'Nước trui sông Bồ kết hợp bùn non giúp tạo nên lớp màng hạ nhiệt dịu êm.',
  'Bí quyết tôi thép của người Hiền Lương không dùng nước lã thông thường mà hòa thêm phù sa bùn non sông Bồ để làm chậm tốc độ tản nhiệt, chống giòn gãy mép cắt.',
  '["Nước tôi dao là bí quyết gia truyền nghiêm ngặt. Nếu tôi bằng nước lã thông thường, thanh thép co rút đột ngột dễ bị cong vênh hoặc giòn nứt. Nhưng khi hòa một lượng bùn non mịn từ lòng sông Bồ, các hạt huyền phù bám quanh thân thép tạo thành một lớp đệm nhiệt, giúp giải nhiệt từ từ từ lõi ra vỏ.", "Nhờ đó, sống dao thì mềm dẻo chịu lực va đập, còn lưỡi cắt thì đạt độ cứng tuyệt đối 60 HRC, gọt sắt ngọt lịm mà không sứt mẻ."]'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
title = EXCLUDED.title, summary = EXCLUDED.summary;
