const BannerData = [
  {
    id: 1,
    image: 'ok.jpg',
  },
  {
    id: 2,
    image: 'ok.jpg',
  },
]
const TypeJob = {
  Type1: {
    id: 1,
    title: 'Nhà cửa và vật dụng',
  },
  Type2: {
    id: 2,
    title: 'Vận chuyển',
  },
  Type3: {
    id: 2,
    title: 'Thời vụ',
  },
}
const FakeData = [
  {
    Id: 1,
    Title: 'CTV Làm việc kho BEST KCN Tân Bình ca 15:00 - 23:00 - 27/03-02/04',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    Address: 'Quận Bình Tân, Hồ Chí Minh',
    DateN: '02 thg 04, 2022',
    Clock: 'Còn 3 ngày nữa',
    Type: [TypeJob.Type1, TypeJob.Type2, TypeJob.Type3],
    Price: 300,
    NumRecruitment: 4,
    isNew: 1,
    Star: 10,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
      {
        id: 2,
        content: 'Có tiền',
      },
    ],
    Question: [
      {
        id: 1,
        content: 'Tôi muốn abc',
        user_id: 1,
        time: '11 giờ trước',
      },
      {
        id: 2,
        content: 'Tôi muốn abc',
        user_id: 4,
        time: '11 giờ trước',
      },
    ],
    isSaved: 0,
    isDelivered: 0,
    isRecived: 1,
    Recruiter: 1,
    ListUser: [
      {
        id: 11,
        id_user: 3,
        title: 'Giúp tôi với bạn ơi !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 12,
        id_user: 2,
        title: 'Giúp tôi với bạn ơi !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: null,
    Status: 'pending',
  },
  {
    Id: 2,
    Title: 'Đóng gói vận chuyển đồ đạc',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://upanh123.com/wp-content/uploads/2021/04/anh-dai-dien-buon-cho-nam16.jpg',
    Address: 'Hà Nội',
    DateN: '18 thg 2, 2022',
    Clock: 'Bất kì lúc nào',
    Type: [TypeJob.Type2],
    Price: 300,
    NumRecruitment: 3,
    isNew: 1,
    Star: 11,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
      {
        id: 2,
        content: 'Có tiền',
      },
    ],
    Question: [
      {
        id: 1,
        content: 'Cho mình hỏi mình có thể đề xuất lại với nhau không ạ?',
        user_id: 1,
        time: '11 giờ trước',
      },
      {
        id: 2,
        content: 'Tôi muốn abc',
        user_id: 3,
        time: '11 giờ trước',
      },
    ],
    isSaved: 0,
    isDelivered: 0,
    isRecived: 1,
    Recruiter: 1,
    ListUser: [
      {
        id: 1,
        id_user: 3,
        title: 'Giúp tôi với bạn ơi1 !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 2,
        id_user: 2,
        title: 'Giúp tôi với bạn ơi !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: null,
    Status: 'pending',
  },
  {
    Id: 3,
    Title: 'Hải Dương - Nhân Viên Kho (Làm Giờ Hành Chính Từ T2 đến T7)',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://haycafe.vn/wp-content/uploads/2021/12/anh-dai-dien-con-gai-view-cuc-chill.jpg',
    Address: 'Hà Nội',
    DateN: '04 thg 04, 2022',
    Clock: 'Bất kì lúc nào',
    Type: [TypeJob.Type1],
    Price: 500,
    NumRecruitment: 5,
    isNew: 0,
    Star: 12,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
    ],
    Question: null,
    isSaved: 0,
    isDelivered: 0,
    isRecived: 1,
    Recruiter: 2,
    ListUser: [
      {
        id: 3,
        id_user: 1,
        title: 'Giúp tôi với bạn ơi !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 4,
        id_user: 4,
        title: 'Giúp tôi với bạn ơi !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: 2,
    Status: 'working',
  },
  {
    Id: 4,
    Title: 'IT Helpdesk - Hà Nội (Đi Làm Ngay)',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
    Address: 'Hà Nội',
    DateN: '28 thg 03, 2022',
    Clock: 'Hết hạn',
    Type: [TypeJob.Type1, TypeJob.Type3],
    Price: 423,
    NumRecruitment: 10,
    isNew: 0,
    Star: 12,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
    ],
    Question: null,
    isSaved: 1,
    isDelivered: 0,
    isRecived: 0,
    Recruiter: 3,
    ListUser: [
      {
        id: 5,
        id_user: 1,
        title: 'Giúp tôi với bạn ơi !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 6,
        id_user: 2,
        title: 'Giúp tôi với bạn ơi !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: null,
    Status: 'pending',
  },
  {
    Id: 5,
    Title: 'Chuyên Viên Kế Toán (Lĩnh Vực Chứng Khoán, Tài Chính, Ngân Hàng)',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/anh-dai-dien-anime-dep_104204759.jpg',
    Address: 'Hà Nội',
    DateN: '28 thg 04, 2022',
    Clock: 'Bất kì lúc nào',
    Type: [TypeJob.Type3, TypeJob.Type2],
    Price: 799,
    NumRecruitment: 7,
    isNew: 0,
    Star: 12,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
      {
        id: 2,
        content: 'Có trình độ',
      },
    ],
    Question: null,
    isSaved: 1,
    isDelivered: 0,
    isRecived: 0,
    Recruiter: 2,
    ListUser: null,
    Receiver: null,
    Status: 'pending',
  },
  {
    Id: 6,
    Title: 'Chuyên Viên Tuyển Dụng - Hà Nội, HCM',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://allimages.sgp1.digitaloceanspaces.com/wikilaptopcom/2021/01/1610802039_Tuyen-tap-avatar-anh-dai-dien-dep-doc-dao-da.jpg',
    Address: 'Hà Nội',
    DateN: '07 thg 04, 2022',
    Clock: 'Còn 12 ngày nữa',
    Type: [TypeJob.Type1, TypeJob.Type2],
    Price: 699,
    NumRecruitment: 2,
    isNew: 0,
    Star: 12,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
    ],
    Question: null,
    isSaved: 1,
    isDelivered: 0,
    isRecived: 0,
    Recruiter: 4,
    ListUser: [
      {
        id: 7,
        id_user: 3,
        title: 'Giúp tôi với bạn ơi !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 8,
        id_user: 2,
        title: 'Giúp tôi với bạn ơi !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: null,
    Status: 'pending',
  },
  {
    Id: 7,
    Title: 'Nhân Viên Dự Toán Nội Thất - Lương Cứng 10-20 Triệu + Thưởng',
    Description:
      'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không xác định lấy một dãy loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum, và gần đây hơn là với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum.',
    Image:
      'https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg',
    Address: 'Hà Nội',
    DateN: '06 thg 04, 2022',
    Clock: 'Còn 10 ngày nữa',
    Type: [TypeJob.Type1, TypeJob.Type2],
    Price: 300,
    NumRecruitment: 3,
    isNew: 0,
    Star: 12,
    NRequire: [
      {
        id: 1,
        content: 'Có sức khỏe',
      },
    ],
    Question: null,
    isSavedd: 0,
    isDelivered: 1,
    isRecived: 0,
    Recruiter: 1,
    ListUser: [
      {
        id: 9,
        id_user: 2,
        title: 'Giúp tôi với bạn ơi !!',
        content:
          'Tôi muốn bạn chỉnh lại 1 chút về thù lao của công việc, nếu được ta sẽ làm việc với nhau nhé',
      },
      {
        id: 10,
        id_user: 3,
        title: 'Tôi mượn bạn 3 triệu !!',
        content: 'Cho tôi nhận công việc này nhé !!',
      },
    ],
    Receiver: null,
    Status: 'working',
  },
]

const NotiData = [
  {
    Id: 1,
    postName: 'Hoan Vu ',
    Noti: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    postImage:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    postDate: '28 thg 2',
    postTime: '16:00 ',
  },
  {
    Id: 2,
    postName: 'Hoan Vu ',
    Noti: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    postImage:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    postDate: '28 thg 2',
    postTime: '16:00 ',
  },
  {
    Id: 3,
    postName: 'Hoan Vu ',
    Noti: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    postImage:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    postDate: '28 thg 2',
    postTime: '16:00 ',
  },
  {
    Id: 4,
    postName: 'Hoan Vu ',
    Noti: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    postImage:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    postDate: '28 thg 2',
    postTime: '16:00 ',
  },
  {
    Id: 5,
    postName: 'Hoan Vu ',
    Noti: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    postImage:
      'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
    postDate: '28 thg 2',
    postTime: '16:00 ',
  },
]
const DataRecommend = [
  {
    id: 1,
    title: 'Hà Nội',
  },
  {
    id: 2,
    title: 'Hồ Chí Minh',
  },
  {
    id: 3,
    title: 'Thời vụ',
  },
  {
    id: 4,
    title: 'Việc nhận theo dự án',
  },
  {
    id: 5,
    title: 'Vận chuyển',
  },
  {
    id: 6,
    title: 'Nhà cửa và vật dụng',
  },
]
export { FakeData, BannerData, TypeJob, NotiData, DataRecommend }
