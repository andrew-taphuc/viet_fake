import "../style.css"; 

const Home = () => {
  const studentInfo = {
    name: "Hoàng Quốc Việt",
    mssv: "20225684",
  };

  const subjects = [
    { semester: "20241", code: "IT3070", name: "Nguyên lý hệ điều hành", tc: 3, midFinal: "8.5/7", grade: "B" },
    { semester: "20241", code: "IT3170", name: "Thuật toán ứng dụng", tc: 2, midFinal: "10/10", grade: "A+" },
    { semester: "20241", code: "IT4015", name: "Nhập môn An toàn thông tin", tc: 3, midFinal: "8/7.5", grade: "B" },
    { semester: "20241", code: "IT3103", name: "Lập trình hướng đối tượng", tc: 3, midFinal: "7/6.5", grade: "C+" },
    { semester: "20241", code: "IT3080", name: "Mạng máy tính", tc: 3, midFinal: "7.5/6.5", grade: "C+" },
    { semester: "20241", code: "JP2126", name: "Tiếng Nhật 5", tc: 2, midFinal: "6/6.5", grade: "C" },
    { semester: "20241", code: "IT4593", name: "Nhập môn kỹ thuật truyền thông", tc: 2, midFinal: "7.5/7", grade: "B" },
    { semester: "20241", code: "JP3110", name: "Tiếng Nhật chuyên ngành 1", tc: 2, midFinal: "7.5/7.5", grade: "B" },
];

  const gpaData = [
    { semester: "20241", gpa: "2.85", passedTC: "24", accumulatedTC: "88", warning: "Mức 0", progress: "Năm thứ ba" },
    { semester: "20232", gpa: "3.2", passedTC: "22", accumulatedTC: "64", warning: "Mức 0", progress: "Năm thứ hai" },
    { semester: "20231", gpa: "3.19", passedTC: "19", accumulatedTC: "42", warning: "Mức 0", progress: "Năm thứ hai" },
    { semester: "20222", gpa: "3.15", passedTC: "13", accumulatedTC: "23", warning: "Mức 0", progress: "Năm thứ nhất" },
    { semester: "20221", gpa: "2.8",  passedTC: "10", accumulatedTC: "10", warning: "Mức 0", progress: "Năm thứ nhất" },
  ];

  return (
    <div className="home-container">
      <h2>Bảng điểm sinh viên</h2>
      <h3>{studentInfo.name} - MSSV: {studentInfo.mssv}</h3>

      <table className="score-table">
        <thead>
          <tr>
            <th>Học kỳ</th>
            <th>Mã HP</th>
            <th>Tên HP</th>
            <th>TC</th>
            {/* <th>Lớp học</th> */}
            <th>Điểm QT</th>
            <th>Điểm thi</th>
            <th>Điểm chữ</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.semester}</td>
              <td>{subject.code}</td>
              <td>{subject.name}</td>
              <td>{subject.tc}</td>
              {/* <td>{subject.class}</td> */}
              <td>{subject.midFinal.split("/")[0]}</td>
              <td>{subject.midFinal.split("/")[1]}</td>
              <td>{subject.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Kết quả học tập sinh viên</h3>
      <table className="gpa-table">
        <thead>
          <tr>
            <th>Học kỳ</th>
            <th>GPA</th>
            {/* <th>CPA</th> */}
            <th>TC qua</th>
            <th>TC tích lũy</th>
            <th>Cảnh báo</th>
            <th>Trình độ</th>
          </tr>
        </thead>
        <tbody>
          {gpaData.map((data, index) => (
            <tr key={index}>
              <td>{data.semester}</td>
              <td>{data.gpa}</td>
              {/* <td>{data.cpa}</td> */}
              <td>{data.passedTC}</td>
              <td>{data.accumulatedTC}</td>
              <td>{data.warning}</td>
              <td>{data.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
