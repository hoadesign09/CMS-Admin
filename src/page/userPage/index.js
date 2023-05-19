import React, {useEffect, useState} from "react";

import "./styles.css";

function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Lấy dữ liệu từ API
      fetch("http://localhost:3132/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);

    return(
        <div className="container-main">
            <div className="context">
                <p>Chào Bảo! Hôm nay của bạn thế nào?</p>
                <p>Chào mừng những thành viên mới của chúng ta nào!</p>
            </div>
            <div className="buttons">
                <button className="button">Lưu</button>
                <button className="button">Xóa</button>
                <button className="button">Cập nhật</button>
            </div>
            <div className="list-user">
                <table>
                    <thead>
                        <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Fullname</th>
                        <th>Phone</th>
                        <th>Services</th>
                        <th>Saved Shows</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.fullname}</td>
                            <td>{user.phone}</td>
                            <td>{user.services}</td>
                            <td>{user.savedShows.join(", ")}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage;