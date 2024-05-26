require('dotenv').config();

const mongoose = require('mongoose');
const Student = require('./src/models/student');

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/student';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const students = [
    {
      "name": "Lê Minh Việt Anh",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Phạm Quang Bách",
      "gender": "Nam",
      "university": "VinUniversity"
    },
    {
      "name": "Hoàng Bá Bảo",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Phạm Minh Cường",
      "gender": "Nam",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Trương Văn Độ",
      "gender": "Nam",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Hoàng Việt Dũng",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Bùi Hoàng Dũng",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Bùi Trọng Dũng",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Trần Thùy Dương",
      "gender": "Nữ",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Quach Dang Giang",
      "gender": "Nam",
      "university": "Đại học Công nghệ Thông tin – Đại học Quốc gia TP.HCM"
    },
    {
      "name": "Nguyễn Thanh Hà",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Thu Hà",
      "gender": "Nữ",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Cù Xuân Hải",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Nguyễn Trung Hiếu",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Đặng Việt Hoàng",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Văn Hùng",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Quốc Hưng",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Lê Minh Hương",
      "gender": "Nữ",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Ngo Dang Huy",
      "gender": "Nam",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Trần Quang Huy",
      "gender": "Nam",
      "university": "Học viện Công Nghệ Bưu Chính Viễn Thông"
    },
    {
      "name": "Trần Minh Huyền",
      "gender": "Nữ",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Đôn Thế Kiệt",
      "gender": "Nam",
      "university": "VinUniversity"
    },
    {
      "name": "Lê Hoàng Trường",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Đào Quang Lợi",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Tiến Long",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Nguyen Quang Long",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Thị Ngọc Mai",
      "gender": "Nữ",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Đỗ Dương Mạnh",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Nguyễn Ngọc Minh",
      "gender": "Nam",
      "university": "Học viện Công Nghệ Bưu Chính Viễn Thông"
    },
    {
      "name": "Vũ Thế Nam",
      "gender": "Nam",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Ngô Công Bằng",
      "gender": "Nam",
      "university": "Học viện Công Nghệ Bưu Chính Viễn Thông"
    },
    {
      "name": "Nguyễn Huy Thái",
      "gender": "Nam",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Phan Khôi Nguyên",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Đinh Việt Quang",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Chí Thành",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Nguyễn Đình Tiến",
      "gender": "Nam",
      "university": "Đại học Bách Khoa Hà Nội"
    },
    {
      "name": "Đỗ Thu Trang",
      "gender": "Nữ",
      "university": "Đại học Công nghệ - Đại học Quốc gia Hà Nội"
    },
    {
      "name": "Nguyễn Thị Mỹ Tú",
      "gender": "Nữ",
      "university": "ITMO University"
    },
    {
      "name": "Nguyễn Quang Tuấn",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Hoàng Minh Tuấn",
      "gender": "Nam",
      "university": "Học viện Công Nghệ Bưu Chính Viễn Thông"
    },
    {
      "name": "Phạm Mạnh Tuấn",
      "gender": "Nam",
      "university": "ITMO University"
    },
    {
      "name": "Bùi Hoàng Vinh",
      "gender": "Nam",
      "university": "Học viện Công Nghệ Bưu Chính Viễn Thông"
    }
  ];
const seedDB = async () => {
    try {
        await Student.deleteMany({});
        await Student.insertMany(students);
        console.log('Data seeded successfully');
    } catch (err) {
        console.error('Failed to seed data:', err);
    } finally {
        mongoose.connection.close();
    }
};
seedDB();
