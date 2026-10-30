import { Artisan, CraftStep, GalleryItem, HistoricSite, Product, Article } from '../types';

export const VILLAGE_INFO = {
  name: 'Làng Rèn Hiền Lương',
  subName: 'Di sản nghề truyền thống Sông Bồ',
  tagline: 'Làng rèn đất Huế — Gìn giữ cội nguồn',
  badge: '500 NĂM LỬA LÒ CỐ ĐÔ',
  address: 'Làng Hiền Lương, xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế',
  phone: '(+84) 0234 3551 234',
  hotline: '0914 205 678',
  email: 'bql.disan@hienluongforge.vn',
  officialEmail: 'bqlditichhienluong@hue.gov.vn',
  website: 'www.hienluongforge.vn',
  visitingHours: 'Thứ Hai – Chủ Nhật: 07:30 – 17:30',
  visitingStatus: 'Đang đón khách (07:30 – 17:30)',
  founder: 'Cụ Thủy tổ Hoàng Đình Chèm',
  foundingEra: 'Thế kỷ XV (Hậu Lê - thời vua Lê Thánh Tông)',
  river: 'Hữu ngạn Sông Bồ',
  route: 'Tỉnh lộ 11B ven sông Bồ (cách TP. Huế khoảng 25km)',
  festivalDate: 'Ngày 18 tháng 2 Âm Lịch hàng năm',
  nationalRanking: 'Di tích Lịch sử Kiến trúc Nghệ thuật Cấp Quốc Gia (Năm 1992)',
  heritageRecognition: 'Làng nghề truyền thống tỉnh Thừa Thiên Huế (Năm 2014)'
};

export const CRAFT_STEPS: CraftStep[] = [
  {
    stepNumber: '01',
    title: 'Chọn & Cắt Phôi Thép Vụn',
    subtitle: 'Thép già kết hợp sắt dẻo dẻo dai',
    badge: 'GIAI ĐOẠN CHUẨN BỊ',
    description: 'Phân loại mác thép đàn hồi, dẻo dai từ các mảnh nhíp ô tô hoặc sắt thanh đặc chủng. Thợ cắt thành từng đoạn phôi chuẩn tỉ lệ độ dày theo từng chủng loại nông cụ.',
    image: '/assets/aistudio/nh__v_n_h_a_l_ng_92a85719.jpg',
    details: ['Thép nhíp Nga / Nhật chọn lọc', 'Cắt nguội chuẩn ly']
  },
  {
    stepNumber: '02',
    title: 'Nung Than Rực Hồng (850°C – 1.000°C)',
    subtitle: 'Canh lửa than hồng đạt sắc chuối chín',
    badge: 'ĐIỂM NHIỆT CỐT LÕI',
    description: 'Đưa phôi vào tâm lò than muồng đượm khói, thụt gió đều tay canh ngọn lửa đạt sắc hồng cam "màu hoa đào" đặc trưng trước khi thép mềm dẻo tuyệt đối.',
    image: '/assets/aistudio/ng__i__ang_r_n_c7d2dedb.jpg',
    details: ['Nhiệt độ đạt chuẩn 850°C - 1.000°C', 'Sắc lửa hoa đào thấu tâm thép'],
    subCaption: 'Bếp Lò Than Củi & Ấm Nước Sôi giữ ấm không gian và nuôi dưỡng thỏi sắt trước giờ dập búa.'
  },
  {
    stepNumber: '03',
    title: 'Đập Thô & Quai Búa Song Gia',
    subtitle: 'Búa cả dẫn nhịp, búa con dội chuẩn xác',
    badge: 'ĐỒNG BỘ NHỊP ĐIỆU',
    description: 'Nhịp búa dập hiệp đồng ăn khớp giữa thợ cả gõ búa con dẫn đường và thợ phụ quai búa tạ 6kg dội xuống. Sắt giãn nở, kết tinh hạt kim loại sít chặt, loại bỏ tạp xỉ.',
    image: '/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg',
    details: ['Nhịp búa song gia: Một thợ gõ nhịp dẫn – Một thợ quai búa tạ', 'Loại bỏ tạp xỉ, định hình sống dao'],
    subCaption: 'Nhịp đập hiệp đồng giữa thợ cả và thợ quai búa tạo nên độ nén kim loại đồng nhất.'
  },
  {
    stepNumber: '04',
    title: 'Mài Bén & Dũa Gọt Cân Đối',
    subtitle: 'Tạo góc vát và sống dao hoàn hảo',
    badge: 'CĂN CHỈNH HÌNH THỂ',
    description: 'Tạo sống dao thẳng tắp, góc vát sắc bén đối xứng hai bên. Thợ dùng dũa thép và đá mài bùn loại bỏ bavia, kiểm tra mặt phẳng trước khi tôi nước.',
    image: '/assets/aistudio/ch_a_gi_c_l__ng_t__7a19a665.jpg',
    details: ['Góc vát tối ưu 18° – 22°', 'Sống dao thẳng tuyệt đối']
  },
  {
    stepNumber: '05',
    title: 'Tôi Thép Bí Truyền Bằng Nước Bùn Non Sông Bồ',
    subtitle: 'Nước trui sông Bồ gia truyền — chém sắt ngọt lịm không quằn mẻ',
    badge: 'BÍ THUẬT GIA TRUYỀN',
    description: 'Yếu tố tạo nên độ dẻo quánh độc nhất: Nhúng chìm lưỡi dao nung vào thùng nước pha phù sa bùn non ven sông Bồ. Tốc độ tản nhiệt dịu hơn nước lã, giúp lưỡi đanh cứng mà ruột vẫn dẻo mềm.',
    image: '/assets/aistudio/h_ng_k_nh_8f6265a8.jpg',
    details: ['Đạt chỉ số 58 – 60 HRC', 'Cắt gỗ lim ngọt mát, sử dụng bền bỉ hàng chục năm không mẻ']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'dao-phay',
    name: 'Dao Phay Chặt Xương Cố Đô',
    category: 'Bếp & Nông nghiệp',
    hardness: '59 HRC',
    description: 'Sống dao dày 5mm, bề mặt đập vảy cá truyền thống chống bám dính thịt, độ cân bằng trọng tâm hoàn hảo khi bổ chặt.',
    specs: {
      dimensions: 'Dài: 32 cm • Nặng: 650g',
      weight: '650g',
      material: 'Thép nhíp tôi bùn non Sông Bồ'
    }
  },
  {
    id: 'rua-cong',
    name: 'Rựa Cong Phát Cây Hiền Lương',
    category: 'Lâm nghiệp & Vườn tược',
    hardness: '60 HRC',
    description: 'Mũi cong móc cành chuyên dụng, sống uốn trợ lực chém đứt ngọt thân tre nứa già không bị dội ngược lực vào cổ tay.',
    specs: {
      dimensions: 'Dài: 45 cm • Nặng: 580g',
      weight: '580g',
      material: 'Thép ray tôi luyện than củi'
    }
  },
  {
    id: 'keo-cat-vai',
    name: 'Kéo Cắt Vải Nghệ May Huế',
    category: 'May mặc thủ công',
    hardness: '58 HRC',
    description: 'Hai lưỡi khép khít từng micromet, chốt đồng thau tiện tay, đường cắt lụa tơ tằm phẳng phiu không tưa mép chỉ.',
    specs: {
      dimensions: 'Dài: 24 cm • Nặng: 310g',
      weight: '310g',
      material: 'Lưỡi mài đá bùn mịn'
    }
  },
  {
    id: 'luoi-cay',
    name: 'Lưỡi Cày Bắp Vẹt Đồng Chiêm',
    category: 'Canh tác lúa nước',
    hardness: '58 HRC',
    description: 'Độ vát lật đất nhanh, chịu va chạm đá sỏi ngầm vùng đất phù sa trũng Phong Điền mà không bị biến dạng hay nứt gãy.',
    specs: {
      dimensions: 'Dài: 38 cm • Nặng: 1.200g',
      weight: '1.200g',
      material: 'Đúc rèn khối dẻo dai'
    }
  }
];

export const ARTISANS: Artisan[] = [
  {
    id: 'truong-van-bon',
    name: 'Cụ Trương Văn Bổn',
    title: 'Bậc Thầy Quai Búa',
    age: 72,
    badge: 'BẬC THẦY QUAI BÚA',
    experience: 'Thâm niên 50+ năm',
    workshop: 'Lò rèn Bốn Phước',
    bio: 'Hơn 50 năm quai búa, sở trường định hình mắt thép ở 1000°C và rèn rựa đốn củi truyền thống lừng danh xứ Đàng Trong. Tay nghề cảm nhận độ "chín" của quặng sắt bằng màu sắc than hồng độc nhất vô nhị.',
    specialty: 'Định hình thép 1000°C & Canh lửa than củi',
    image: '/assets/aistudio/l_ng_4bad7b81.jpg'
  },
  {
    id: 'hoang-van-ung',
    name: 'Nghệ nhân Hoàng Văn Ứng',
    title: 'Kỹ Thuật Tôi & Mài',
    age: 58,
    badge: 'KỸ THUẬT TÔI & MÀI',
    experience: 'Thâm niên 35+ năm',
    workshop: 'Lò rèn Gia Truyền họ Hoàng',
    bio: 'Chuyên gia mài bén, giũa vát mép dao sắc bén, chuẩn xác từng milimet. Đôi mắt tinh anh và bàn tay điều hòa đá mài nước bảo chứng cho độ giữ cạnh sắc bén vượt trội của nông cụ Hiền Lương.',
    specialty: 'Mài sắc vi mô & Cân lưỡi đối xứng',
    image: '/assets/aistudio/ch_a_gi_c_l__ng_t__7a19a665.jpg'
  },
  {
    id: 'hoang-van-thang',
    name: 'Anh Hoàng Văn Thắng',
    title: 'Thế Hệ Kế Thừa Thứ 4',
    age: 38,
    badge: 'THẾ HỆ KẾ THỪA THỨ 4',
    experience: 'Kế thừa 15+ năm',
    workshop: 'Lò rèn Thắng Lợi',
    bio: 'Kế tục lò rèn gia truyền, áp dụng cải tiến quạt gió tiết kiệm than củi, nâng cao hiệu suất nhiệt và an toàn lao động nhưng vẫn bảo tồn triệt để phương thức rèn búa thủ công.',
    specialty: 'Nhiệt luyện tiết kiệm & Cơ khí nông nghiệp cải tiến',
    image: '/assets/aistudio/RJXd0SY2RrzAyv2Clp97MmUeThHP_nOk737FO3_xpU3sfYTMEfFT_luotzmlXRC6jOhgoIJtb3YteR1wpStGthwkacwBaxn0wejvDX4TYBbvXjDEWLuZR5Wivi4I3KW5toAfDA0aWzbSLK0WYGP3oN7vHPqY3jEtsy0Z891bGSBFGVz16PR_MEo_CWpX21Iv_ef9dd9e9.jpg'
  },
  {
    id: 'bac-tho-ren-ky-cuu',
    name: 'Bác Thợ Rèn Kỷ Cựu',
    title: 'Người Giữ Hồn Bễ Lò',
    age: 65,
    badge: 'NGƯỜI GIỮ HỒN BỄ LÒ',
    experience: 'Thâm niên 40+ năm',
    workshop: 'Xóm Rèn Phong Hiền',
    bio: 'Hơn 40 năm gắn bó trọn vẹn với nhịp đe đập dồn dập và tiếng xì xèo khi tôi thép trong chum nước mát. Người thuộc từng tính nết của từng loại phôi thép thu gom từ khắp vùng đồng bằng.',
    specialty: 'Giác ngộ âm đe & Tôi nước sông Bồ',
    image: '/assets/aistudio/ngh__r_n_trao_th__ng_45ca283d.jpg'
  }
];

export const HISTORIC_SITES: HistoricSite[] = [
  {
    id: 'chua-giac-luong',
    title: 'Chùa Cổ Giác Lương Tự',
    subtitle: 'Di Tích Kiến Trúc Nghệ Thuật Cấp Quốc Gia (Xếp hạng 23/06/1992)',
    period: 'Khởi dựng thời Lê Trung Hưng (trên 300 năm lịch sử bảo tồn)',
    description: 'Chùa Giác Lương là cổ tự tâm linh tiêu biểu nhất của làng rèn Hiền Lương, khởi dựng từ thời Lê Trung Hưng bởi bà Hoàng Thị Phiếu cùng các tộc trưởng trong làng ở xứ Cồn Bệ, sau dời về xóm Phước Tự (xóm Chùa) bên dòng sông Bồ. Chùa xây hướng Nam gồm 2 gian 4 chái bằng sườn gỗ lim quý chạm trổ tinh mỹ lợp ngói liệt, bao bọc bởi vòng la thành gạch cổ kính dài 79m, rộng 55,2m. Cổng Tam quan 2 tầng uy nghiêm khảm sành sứ hoa văn rồng phượng đồ sộ hơn nhiều ngôi quốc tự ở Cố Đô. Nơi đây phối thờ 12 vị Thủy tổ khai làng và lưu giữ quả đại hồng chung đúc năm 1819 khắc tên những người thợ rèn tài hoa của làng.',
    features: [
      'Cổng Tam quan 2 tầng đồ sộ khảm sành sứ rồng phượng tinh xảo bậc nhất xứ Huế',
      'Kiến trúc nhà rường 2 gian 4 chái sườn gỗ lim lợp ngói liệt truyền thống',
      'Đại hồng chung đúc năm 1819 (Gia Long thứ 18) khắc danh tánh các phường thợ rèn cúng dường',
      'La thành gạch cổ chu vi 79m x 55,2m cùng hệ thống miếu Cao Các, miếu Thượng tướng quân Trần Quý Công',
      'Di tích Kiến trúc Nghệ thuật cấp Quốc gia theo Quyết định 776-QĐ/BT năm 1992'
    ],
    image: '/assets/chua-giac-luong-tam-quan.jpg',
    imageCaption: 'Cổng Tam quan Chùa Giác Lương – Kiệt tác nghệ thuật kiến trúc khảm sành sứ cổ kính hơn 300 năm bên bờ sông Bồ.',
    gallery: [
      {
        id: 'cgl-tong-the',
        image: '/assets/chua-giac-luong-tong-the.jpg',
        title: 'Toàn Cảnh Chùa Giác Lương (Góc chụp Flycam)',
        caption: 'Toàn cảnh quần thể di tích nhìn từ trên cao',
        desc: 'Trục kiến trúc đăng đối từ Cổng Tam Quan, con đường gạch đỏ dẫn qua lư hương đồng vào Chánh Điện giữa tán cây cổ thụ và các ngôi bảo tháp, lăng mộ cổ thanh tịnh ven sông Bồ.'
      },
      {
        id: 'cgl-chuong-dong',
        image: '/assets/chua-giac-luong-chuong-dong.jpg',
        title: 'Bảo Vật Đại Hồng Chung Đúc Năm 1819 (Gia Long thứ 18)',
        caption: 'Chuông đồng cổ kính hơn 200 năm tuổi',
        desc: 'Đại hồng chung quý giá treo trên giá gỗ lim chạm khắc rồng phượng tinh xảo. Văn bia và chữ Hán khắc quanh chuông ghi tạc công đức cúng dường của các phường lò rèn làng Hiền Lương.'
      },
      {
        id: 'cgl-hai-ong-tuong',
        image: '/assets/chua-giac-luong-hai-ong-tuong.jpg',
        title: 'Hai Vị Đại Lực Sĩ Kim Cương (Thần Hộ Pháp Chấp Kim Cương)',
        caption: 'Hai pho tượng Hộ Pháp uy nghiêm gác cổng tam quan',
        desc: 'Đứng đối diện nhau ở hai bên tả hữu bên trong vòm Cổng Tam Quan, hai vị thần Hộ Pháp mang giáp trụ uy dũng bảo vệ chốn thiền môn thanh tịnh của làng cổ.'
      },
      {
        id: 'cgl-chanh-dien',
        image: '/assets/chua-giac-luong-chanh-dien.png',
        title: 'Tiền Đường Chánh Điện Nhà Rường Gỗ Lim 2 Gian 4 Chái',
        caption: 'Kiến trúc tiền đường với hàng cột chạm rồng hoa sen',
        desc: 'Hàng cột đắp nổi rồng cuộn hoa sen tinh xảo cùng hệ thống cửa thượng song hạ bản bằng gỗ lim quý, bảo tồn nguyên vẹn tinh hoa kiến trúc gỗ Đàng Trong thời Lê Trung Hưng.'
      },
      {
        id: 'cgl-khuon-vien',
        image: '/assets/chua-giac-luong-khuon-vien.jpg',
        title: 'Khuôn Viên Chốn Thiền Môn & Cây Sứ Cổ Thụ Trăm Năm',
        caption: 'Con đường gạch đỏ rợp bóng cây sứ cổ thụ',
        desc: 'Không gian trầm mặc, thanh tịnh với hàng cây sứ đại cổ thụ râm mát, đắp nền cho đỉnh lư hương đồng uy nghi trước sân tiền đường.'
      },
      {
        id: 'cgl-tam-quan-3goc',
        image: '/assets/chua-giac-luong-cong-tam-quan-3goc.png',
        title: 'Cổng Tam Quan 2 Tầng Khảm Sành Sứ Rồng Phượng',
        caption: '3 góc nhìn Cổng Tam quan đồ sộ bậc nhất xứ Huế',
        desc: 'Kiến trúc 3 cửa vòm cuốn bên dưới và vọng lầu đồ sộ, từng góc mái chạm nổi hoa văn sành sứ tuyệt tác bề thế hơn cả nhiều ngôi quốc tự ở Cố Đô.'
      },
      {
        id: 'cgl-la-thanh',
        image: '/assets/chua-giac-luong-la-thanh.png',
        title: 'Vòng La Thành Gạch Cổ Chu Vi 79m x 55.2m',
        caption: 'Tường la thành gạch vồ bao bọc khuôn viên cổ tự',
        desc: 'Bức tường gạch cao 1.2m rêu phong vững chãi bao quanh khu đất hình chữ nhật rộng gần nửa hecta, ngăn cách không gian tâm linh với xóm làng.'
      }
    ]
  },
  {
    id: 'nha-tho-to-nghe-ren',
    title: 'Nhà Thờ Tổ Nghề Rèn Hiền Lương',
    subtitle: 'Tổ Đình Nghề Rèn Sông Bồ',
    period: 'Tổ đình truyền đời phụng thờ Cụ Thủy tổ Hoàng Đình Chèm',
    description: 'Tổ đình là không gian linh thiêng bậc nhất của cộng đồng phường rèn, nơi thờ tự cụ Thủy tổ Hoàng Đình Chèm (quê gốc Hoằng Hóa, Thanh Hóa) – người có công mang kỹ nghệ rèn sắt tiến bộ vào khai phá bãi bồi ven sông Bồ thời các chúa Nguyễn khai hoang Nam tiến. Tại gian chính điện, bức hoành phi sơn son thiếp vàng "Nghiệp Lưu Tổ Đức" cùng các văn bia chữ Nôm ghi tạc danh tính những bậc tiền bối khai sáng.',
    features: [
      'Thờ tự Thủy tổ Hoàng Đình Chèm cùng các bậc tiền hiền khai canh khai cư',
      'Hoành phi sơn son thiếp vàng "Nghiệp Lưu Tổ Đức"',
      'Nơi diễn ra Lễ Giỗ Tổ Nghề Rèn hàng năm vào ngày 18 tháng 2 Âm lịch',
      'Điểm tụ hội của con cháu phường rèn khắp mọi miền đất nước'
    ],
    image: '/assets/aistudio/c99QpHCNl6N_8DDZTmgsVqZnAC5TtCgEA_m9CbDwYir8w59UjA3rj7UrCUfw3xOSdLq2h1TQSqTFciZoUW1Mv09wCI2MNUFvZHIUx_W1R2H61nqKZHSuVOPe91NQYLd_PAJ7zLPE2nEKXdBDTBnEzae8K01sUPw3BPkWRen8Ob7yIymJ2nPI5QAgwJHyWaZn_5e83773e.jpg',
    imageCaption: 'Khuôn viên Tổ Đình Nghề Rèn rợp bóng cây xanh và đường gạch đỏ trang nghiêm.'
  },
  {
    id: 'hoi-dong-bo-lao',
    title: 'Hội Đồng Bô Lão & Lễ Hội Truyền Thống',
    subtitle: 'Nghi thức tế lễ và gắn kết huyết thống cộng đồng',
    period: 'Tổ chức định kỳ ngày 18/2 Âm Lịch',
    description: 'Vào ngày 18 tháng Hai âm lịch mỗi năm, con cháu thợ rèn Hiền Lương từ Gia Lai, Đắk Lắk, Đồng Nai, Sài Gòn và khắp mọi miền đất nước lại hành hương về quê cha đất tổ. Mùi trầm quyện trong tiếng chuông, tiếng chiêng và những lời khấn nguyện tạo nên một không khí gắn kết huyết thống làng nghề sâu đậm.',
    features: [
      'Nghi thức dâng lễ vật rèn mới kính cáo tổ tiên',
      'Các cụ bô lão trong y phục áo dài khăn đóng truyền thống điều hành tế tự',
      'Vinh danh và trao bằng chứng nhận nghệ nhân làng nghề',
      'Không gian giao lưu ký ức văn hóa sông Bồ'
    ],
    image: '/assets/aistudio/minh_h_a_r_n_d5dc7a8f.jpg',
    imageCaption: 'Các bậc cao niên, nghệ nhân lão thành tề tựu trong trang phục truyền thống, nụ cười rạng rỡ truyền lửa nghề cho thế hệ con cháu.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hl-01',
    code: 'HL-01',
    title: 'Bếp than rực lửa ấm nước sôi',
    category: 'quy-trinh',
    categoryLabel: 'QUY TRÌNH RÈN',
    image: '/assets/aistudio/h_ng_k_nh_8f6265a8.jpg',
    caption: 'Lửa lò & bễ gió: Ngọn lửa than muồng giữ ấm không gian và nuôi dưỡng thỏi sắt trước giờ dập búa.',
    meta: '2023 • Lò rèn Bác Thân',
    attribution: 'Ảnh: Tư liệu BQL Di tích'
  },
  {
    id: 'hl-02',
    code: 'HL-02',
    title: 'Cổng Tam Quan Chùa Giác Lương',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-tam-quan.jpg',
    caption: 'Cổng Tam quan 2 tầng khảm sành sứ rồng phượng cổ kính hơn 300 năm bên bờ sông Bồ.',
    meta: 'Di tích Quốc gia cấp 1 (1992)',
    attribution: 'Ảnh: Tư liệu khảo cổ di tích'
  },
  {
    id: 'hl-02b',
    code: 'HL-02B',
    title: 'Đại Hồng Chung đúc năm 1819',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-chuong-dong.jpg',
    caption: 'Chuông đồng niên hiệu Gia Long thứ 18 khắc danh tánh các phường thợ rèn làng Hiền Lương phụng cúng.',
    meta: 'Niên đại 1819 • Chùa Giác Lương',
    attribution: 'Ảnh: Lưu trữ BQL Di tích'
  },
  {
    id: 'hl-02c',
    code: 'HL-02C',
    title: 'Hai Vị Đại Lực Sĩ Kim Cương',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-hai-ong-tuong.jpg',
    caption: 'Hai pho tượng Hộ Pháp Chấp Kim Cương uy nghiêm canh gác cổng tam quan chốn thiền môn.',
    meta: 'Tượng Hộ Pháp • Chùa Giác Lương',
    attribution: 'Ảnh: Khảo cổ di tích'
  },
  {
    id: 'hl-02d',
    code: 'HL-02D',
    title: 'Toàn cảnh Chùa Giác Lương (Flycam)',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-tong-the.jpg',
    caption: 'Toàn cảnh quần thể di tích Chùa Giác Lương nhìn từ trên cao rợp bóng cây xanh ven sông Bồ.',
    meta: 'Di tích Quốc gia 1992 • Flycam Dân Trí',
    attribution: 'Ảnh: Báo Dân Trí'
  },
  {
    id: 'hl-02e',
    code: 'HL-02E',
    title: 'Khuôn viên chốn thiền môn & Cây sứ cổ thụ',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-khuon-vien.jpg',
    caption: 'Đường gạch đỏ rợp mát dưới tàng cây sứ đại trăm năm tuổi cùng đỉnh lư hương đồng uy nghi.',
    meta: 'Khuôn viên di tích • Chùa Giác Lương',
    attribution: 'Ảnh: Tư liệu thực địa'
  },
  {
    id: 'hl-02f',
    code: 'HL-02F',
    title: 'Tiền đường Chánh Điện nhà rường gỗ lim',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/chua-giac-luong-chanh-dien.png',
    caption: 'Cột tiền đường đắp nổi rồng cuộn hoa sen tinh xảo cùng cửa thượng song hạ bản gỗ lim quý.',
    meta: 'Kiến trúc Lê Trung Hưng',
    attribution: 'Ảnh: Tư liệu BQL Di tích'
  },
  {
    id: 'hl-03',
    code: 'HL-03',
    title: 'Nghệ nhân quai búa tạo hình',
    category: 'nghe-nhan',
    categoryLabel: 'NGHỆ NHÂN LÀNG NGHỀ',
    image: '/assets/aistudio/l_ng_4bad7b81.jpg',
    caption: 'Kỹ nghệ gia truyền: Đôi bàn tay chai sạn định hình góc sống dao chính xác từng milimet.',
    meta: 'Nghệ nhân Hoàng Văn Dũng',
    attribution: 'Ảnh: Phóng sự báo chí'
  },
  {
    id: 'hl-04',
    code: 'HL-04',
    title: 'Toàn cảnh làng nhìn từ trên cao',
    category: 'phong-canh',
    categoryLabel: 'PHONG CẢNH SÔNG BỒ',
    image: '/assets/aistudio/473087044_1343173223378869_4699288504724766910_n_130a4eff.jpg',
    caption: 'Không gian làng cổ: Những mái ngói đỏ đan xen giữa vườn cây trù phú ven bờ phù sa sông Bồ.',
    meta: 'Lưu vực sông Bồ • Phong Hiền',
    attribution: 'Ảnh: @dtuan27'
  },
  {
    id: 'hl-05',
    code: 'HL-05',
    title: 'Bộ sưu tập dao kéo nông cụ',
    category: 'san-pham',
    categoryLabel: 'SẢN PHẨM DAO KÉO',
    image: '/assets/aistudio/nh__v_n_h_a_l_ng_92a85719.jpg',
    caption: 'Tinh hoa sản vật: Các mẫu dao, rựa, liềm, kéo thủ công nổi tiếng sắc bén và bền bỉ.',
    meta: 'Trưng bày Đình Làng Hiền Lương',
    attribution: 'Ảnh: Trưng bày di sản'
  },
  {
    id: 'hl-06',
    code: 'HL-06',
    title: 'Đập búa hiệp đồng bên lò than',
    category: 'quy-trinh',
    categoryLabel: 'QUY TRÌNH RÈN',
    image: '/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg',
    caption: 'Song thợ phối hợp: Nhịp búa con lanh lảnh và búa tạ 6kg giáng xuống nén chặt khối kim loại.',
    meta: 'Nhịp điệu quai búa truyền thống',
    attribution: 'Ảnh: Báo chí văn hóa'
  },
  {
    id: 'hl-07',
    code: 'HL-07',
    title: 'Cổng đình làng và hoa văn cổ',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/aistudio/th__r_n_55c5307e.jpg',
    caption: 'Nghệ thuật khảm sành sứ: Chi tiết rồng phượng cổ kính trên mái đình làng Hiền Lương.',
    meta: 'Hoa văn thời Nguyễn',
    attribution: 'Ảnh: Bảo tồn di sản'
  },
  {
    id: 'hl-08',
    code: 'HL-08',
    title: 'Các cụ bô lão tề tựu ngày hội làng',
    category: 'nghe-nhan',
    categoryLabel: 'LỄ HỘI & NGHỆ NHÂN',
    image: '/assets/aistudio/minh_h_a_r_n_d5dc7a8f.jpg',
    caption: 'Ngày Giỗ Tổ Nghề: Các nghệ nhân và bô lão trong trang phục cổ truyền tề tựu kính nhớ công đức tiền nhân.',
    meta: 'Ngày 18 tháng 2 Âm lịch',
    attribution: 'Ảnh: Dân trí'
  },
  {
    id: 'hl-09',
    code: 'HL-09',
    title: 'Cổng làng Hiền Lương đón chào du khách',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/aistudio/__n__ng__ang_r_n_3d1f5391.jpg',
    caption: 'Cổng làng ngói đỏ rêu phong uy nghiêm chào đón lữ khách về với vùng đất lửa lò cổ kính.',
    meta: 'Cổng làng cổ Hiền Lương',
    attribution: 'Ảnh: Tư liệu địa phương'
  },
  {
    id: 'hl-10',
    code: 'HL-10',
    title: 'Nghệ nhân mài bén lưỡi cắt',
    category: 'quy-trinh',
    categoryLabel: 'QUY TRÌNH RÈN',
    image: '/assets/aistudio/ch_a_gi_c_l__ng_t__7a19a665.jpg',
    caption: 'Từng đường dũa, từng lượt đá mài nước đòi hỏi sự tập trung cao độ để lưỡi dao sắc lịm.',
    meta: 'Kỹ thuật mài bén thủ công',
    attribution: 'Ảnh: Tư liệu di sản'
  },
  {
    id: 'hl-11',
    code: 'HL-11',
    title: 'Lửa hồng lò than rực sáng',
    category: 'quy-trinh',
    categoryLabel: 'QUY TRÌNH RÈN',
    image: '/assets/aistudio/ng__i__ang_r_n_c7d2dedb.jpg',
    caption: 'Nhiệt độ nung thép đạt đỉnh trong lòng bễ than muồng rực rỡ sắc hoa đào.',
    meta: 'Lửa nghề hơn 500 năm',
    attribution: 'Ảnh: Lưu trữ xưởng rèn'
  },
  {
    id: 'hl-12',
    code: 'HL-12',
    title: 'Mùa vàng trên đồng lúa Sông Bồ',
    category: 'phong-canh',
    categoryLabel: 'PHONG CẢNH SÔNG BỒ',
    image: '/assets/aistudio/475764300_1357368571959334_4919976621258073376_n_1e594972.jpg',
    caption: 'Cánh đồng lúa trĩu hạt được gặt hái bằng những chiếc liềm rèn thủ công của người Hiền Lương.',
    meta: 'Đồng quê Phong Hiền mùa gặt',
    attribution: 'Ảnh: @dtuan27'
  },
  {
    id: 'hl-13',
    code: 'HL-13',
    title: 'Nghệ nhân cao niên bên bễ lò than',
    category: 'nghe-nhan',
    categoryLabel: 'NGHỆ NHÂN LÀNG NGHỀ',
    image: '/assets/aistudio/ngh__r_n_trao_th__ng_45ca283d.jpg',
    caption: 'Dù tuổi cao, đôi mắt lão nông vẫn tinh tường theo dõi nhịp than hồng và thỏi thép nung đỏ.',
    meta: 'Nghệ nhân xóm rèn',
    attribution: 'Ảnh: Di sản sông Bồ'
  },
  {
    id: 'hl-14',
    code: 'HL-14',
    title: 'Đường làng rợp bóng tre ven sông',
    category: 'phong-canh',
    categoryLabel: 'PHONG CẢNH SÔNG BỒ',
    image: '/assets/aistudio/475224124_1354097162286475_1354472339841426206_n_3b801042.jpg',
    caption: 'Đường làng bình yên nối liền các xóm rèn truyền thống rợp bóng cây xanh mát rượi.',
    meta: 'Đường xóm Hiền Lương',
    attribution: 'Ảnh: @dtuan27'
  },
  {
    id: 'hl-15',
    code: 'HL-15',
    title: 'Hoa sen nở rộ đầm nước Hiền Lương',
    category: 'phong-canh',
    categoryLabel: 'PHONG CẢNH SÔNG BỒ',
    image: '/assets/aistudio/689464321_1704204000609121_3504864056535553614_n_2bfc9c04.jpg',
    caption: 'Hương sen thanh khiết bên cạnh những xưởng rèn đậm nét văn hóa nông nghiệp cố đô.',
    meta: 'Đầm sen Phong Hiền',
    attribution: 'Ảnh: @dtuan27'
  },
  {
    id: 'hl-16',
    code: 'HL-16',
    title: 'Tổ Đình Nghề Rèn nhìn từ trên cao',
    category: 'di-tich',
    categoryLabel: 'DI TÍCH & TÂM LINH',
    image: '/assets/aistudio/c99QpHCNl6N_8DDZTmgsVqZnAC5TtCgEA_m9CbDwYir8w59UjA3rj7UrCUfw3xOSdLq2h1TQSqTFciZoUW1Mv09wCI2MNUFvZHIUx_W1R2H61nqKZHSuVOPe91NQYLd_PAJ7zLPE2nEKXdBDTBnEzae8K01sUPw3BPkWRen8Ob7yIymJ2nPI5QAgwJHyWaZn_5e83773e.jpg',
    caption: 'Khuôn viên Tổ Đình trang nghiêm nằm giữa làng vườn xanh mướt, nơi lưu giữ hồn cốt nghề rèn.',
    meta: 'Tổ đình nghề rèn Hiền Lương',
    attribution: 'Ảnh: Dân trí'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'khong-gian-di-san-500-nam',
    slug: 'khong-gian-di-san-500-nam',
    title: 'Không gian di sản làng rèn cổ hơn 500 năm bên dòng sông Bồ',
    category: 'LÀNG NGHỀ TRUYỀN THỐNG',
    date: '15/04/2024',
    views: 4820,
    author: 'Ban Quản Lý Di Tích',
    coverImage: '/assets/aistudio/c99QpHCNl6N_8DDZTmgsVqZnAC5TtCgEA_m9CbDwYir8w59UjA3rj7UrCUfw3xOSdLq2h1TQSqTFciZoUW1Mv09wCI2MNUFvZHIUx_W1R2H61nqKZHSuVOPe91NQYLd_PAJ7zLPE2nEKXdBDTBnEzae8K01sUPw3BPkWRen8Ob7yIymJ2nPI5QAgwJHyWaZn_5e83773e.jpg',
    coverCaption: 'Toàn cảnh không gian làng cổ Hiền Lương rợp bóng cây xanh nhìn từ trên cao — Xã Phong Hiền, huyện Phong Điền.',
    summary: 'Làng rèn Hiền Lương tọa lạc bên bờ hạ lưu sông Bồ thuộc xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế. Khởi thủy từ nửa cuối thế kỷ XV thời vua Lê Thánh Tông, đây là một trong những làng nghề thủ công kim khí cổ kính nhất miền Trung.',
    contentParagraphs: [
      'Trải qua hơn năm thế kỷ thăng trầm, những lò rèn nơi đây vẫn ngày đêm đỏ lửa. Sản phẩm nông cụ và dao kéo Hiền Lương nức tiếng khắp vùng nhờ độ sắc ngọt, độ dẻo dai và kỹ thuật trui thép độc nhất vô nhị bằng nguồn nước sông Bồ hòa bùn non.',
      'Thao tất nấu đồng, nước thép trui thả thách qua sấm truyền bao thế hệ người thợ xứ Huế.',
      'Nghệ thuật đập búa của người thợ Hiền Lương là một sự kết hợp phi thường giữa thị giác, thính giác và nhịp thở. Khi thanh sắt được nung đến màu hoa đào chừng 900-1000 độ C, người thợ cả dùng kẹp gắp ra đe, gõ nhẹ chiếc búa con 1kg để định vị điểm dập và ra hiệu cho thợ phụ vung cây búa tạ 6kg giáng xuống như sấm rền.',
      'Bên cạnh làng nghề, quần thể đình làng Hiền Lương và Chùa Giác Lương Tự tạo thành tam giác văn hóa tâm linh đặc sắc. Hàng năm vào ngày 18 tháng 2 Âm lịch, lễ tế Tổ sư nghề rèn được tổ chức long trọng, quy tụ đông đảo con cháu các dòng họ Hoàng, Trương, Nguyễn, Lê về tri ân cội nguồn.'
    ]
  },
  {
    id: 'bi-quyet-toi-thep-bun-non',
    slug: 'bi-quyet-toi-thep-bun-non',
    title: '5 công đoạn trui thép bí truyền bằng nước bùn non sông Bồ',
    category: 'QUY TRÌNH NGHỀ',
    date: '10/05/2024',
    views: 3250,
    author: 'Nghệ nhân Hoàng Văn Ứng',
    coverImage: '/assets/aistudio/h_ng_k_nh_8f6265a8.jpg',
    coverCaption: 'Nước trui sông Bồ kết hợp bùn non giúp tạo nên lớp màng hạ nhiệt dịu êm.',
    summary: 'Bí quyết tôi thép của người Hiền Lương không dùng nước lã thông thường mà hòa thêm phù sa bùn non sông Bồ để làm chậm tốc độ tản nhiệt, chống giòn gãy mép cắt.',
    contentParagraphs: [
      'Nước tôi dao là bí quyết gia truyền nghiêm ngặt. Nếu tôi bằng nước lã thông thường, thanh thép co rút đột ngột dễ bị cong vênh hoặc giòn nứt. Nhưng khi hòa một lượng bùn non mịn từ lòng sông Bồ, các hạt huyền phù bám quanh thân thép tạo thành một lớp đệm nhiệt, giúp giải nhiệt từ từ từ lõi ra vỏ.',
      'Nhờ đó, sống dao thì mềm dẻo chịu lực va đập, còn lưỡi cắt thì đạt độ cứng tuyệt đối 60 HRC, gọt sắt ngọt lịm mà không sứt mẻ.'
    ]
  },
  {
    id: 'chua-co-giac-luong-500-nam',
    slug: 'chua-co-giac-luong-500-nam',
    title: 'Kiến trúc cổ chùa Giác Lương Tự 500 năm tuổi',
    category: 'DI TÍCH LỊCH SỬ',
    date: '20/06/2024',
    views: 2890,
    author: 'Nhà nghiên cứu văn hóa Huế',
    coverImage: '/assets/chua-giac-luong-tong-the.jpg',
    coverCaption: 'Toàn cảnh Chùa Giác Lương chụp từ trên cao (Flycam): Ngôi cổ tự hơn 300 năm linh thiêng bên bờ sông Bồ.',
    summary: 'Chùa Giác Lương Tự không chỉ là di tích kiến trúc nghệ thuật cấp quốc gia mà còn là linh hồn tâm linh che chở cho lửa lò của người thợ rèn suốt nửa thiên niên kỷ.',
    contentParagraphs: [
      'Được khởi dựng năm 1774 thời vua Lê Ý Tông, chùa Giác Lương bảo lưu nguyên vẹn kết cấu rường gỗ lim truyền thống xứ Đàng Trong. Từng thanh kèo, con xỏ đều được chạm khắc tỉ mỉ hoa văn rồng mây, hoa cúc, tùng hạc.',
      'Trong khuôn viên chùa có bệ thờ kính bái chư vị thần linh và hương linh tiền nhân làng rèn, minh chứng cho sự dung hòa sâu sắc giữa đạo Phật và tín ngưỡng tổ nghề dân gian.'
    ]
  }
];

export interface HamletItem {
  id: string;
  name: string;
  type: string;
  desc: string;
}

export const HAMLETS: HamletItem[] = [
  { id: 'xom-1', name: 'Xóm 1 (Xóm Dao)', type: 'Lò rèn gia dụng', desc: 'Chuyên rèn các loại dao chặt, dao thái, dao bầu truyền thống' },
  { id: 'xom-2', name: 'Xóm 2 (Xóm Rựa)', type: 'Lò rèn nông lâm', desc: 'Nổi danh với rựa phát cây, rựa đốn tre uốn sống cong trợ lực' },
  { id: 'xom-3', name: 'Xóm 3 (Xóm Cuốc)', type: 'Lò rèn khai hoang', desc: 'Chuyên cuốc vẹt, cuốc chim, cuốc bàn làm đất màu mỡ' },
  { id: 'xom-4', name: 'Xóm 4 (Xóm Kéo)', type: 'Lò rèn thủ công tinh xảo', desc: 'Kỹ nghệ rèn kéo cắt vải khít từng micromet cho thợ may Cố Đô' },
  { id: 'xom-5', name: 'Xóm 5 (Xóm Dao Bếp)', type: 'Lò rèn ẩm thực cung đình', desc: 'Chế tác dụng cụ nhà bếp tinh xảo dâng tiến triều đình xưa' },
  { id: 'xom-6', name: 'Xóm 6 (Xóm Bễ Lò)', type: 'Khu trung tâm bễ than', desc: 'Khu vực tập trung bễ thụt ống gỗ và nghề rèn phôi sắt nặng' },
  { id: 'xom-7', name: 'Xóm 7 (Xóm Liềm)', type: 'Lò rèn mùa vụ', desc: 'Chế tạo liềm hái lúa, liềm cắt cỏ có khía răng cưa mịn' },
  { id: 'xom-8', name: 'Xóm 8 (Xóm Lưỡi Cày)', type: 'Lò rèn đại nông cụ', desc: 'Rèn lưỡi cày bắp vẹt lật đất sâu cho đồng bằng duyên hải' },
  { id: 'xom-9', name: 'Xóm 9 (Xóm Đập Búa)', type: 'Khu nghệ nhân quai búa', desc: 'Nơi quy tụ những thợ quai búa tạ khỏe khoắn đồng nhịp nhất' }
];

export const NINE_HAMLETS = HAMLETS;

export const TIMELINE_EVENTS = [
  {
    period: 'Thế kỷ XV',
    title: 'Khởi Thủy Lập Làng',
    desc: 'Cụ Thủy tổ Hoàng Đình Chèm cùng dòng họ mang bí quyết nghề rèn từ xứ Bắc di cư vào đất Thuận Hóa, chọn bờ sông Bồ màu mỡ khai canh lập nghiệp và truyền lửa nghề cho con cháu.'
  },
  {
    period: 'Thời Triều Nguyễn',
    title: 'Thời Kỳ Cực Thịnh',
    desc: 'Chế tác nông cụ bền bỉ và vũ khí hộ quốc, nhận nhiều sắc phong triều đình. Thợ rèn Hiền Lương từng tham gia chế tạo chi tiết cơ khí cầu Trường Tiền thời Hãng Eiffel trùng tu.'
  },
  {
    period: 'Năm 1992',
    title: 'Di Tích Cấp Quốc Gia',
    desc: 'Chùa Giác Lương Tự thuộc quần thể di tích làng rèn được Bộ Văn hóa Thông tin chính thức công nhận và xếp hạng Di tích Kiến trúc Nghệ thuật Cấp Quốc Gia.'
  },
  {
    period: 'Năm 2014 – Nay',
    title: 'Vinh Danh Di Sản & Bảo Tồn',
    desc: 'UBND Tỉnh Thừa Thiên Huế công nhận Làng nghề truyền thống rèn Hiền Lương. Xây dựng cổng thông tin số bảo tồn di sản, kết nối cộng đồng Hàng Kỉnh và phát triển du lịch làng nghề.'
  }
];

export const ARTISAN_STATS = {
  activeForges: '14 Hộ gia đình',
  generations: '04 Thế hệ',
  heritageYears: '500+ Năm',
  rankingDate: 'Xếp hạng Di tích: 1992'
};
