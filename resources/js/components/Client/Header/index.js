import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="page-header">
            

            <h1 className="page-header__title">Идём<span>в</span>кино</h1>

     
    
            
        </header>
       
    );
}
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//     return (
//         <header className="page-header">
//             <h1 className="page-header__title">Идём<span>в</span>кино</h1>
//             <Link to="/admin/login" className="knopka">
//                 Войти как администратор
//             </Link>
//         </header>
//     );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Header() {
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         navigate('/admin/login'); // Перенаправляем на страницу /admin/login
//     };

//     return (
//         <header className="page-header">
//             <h1 className="page-header__title">Идём<span>в</span>кино</h1>
//             <button type="button" className="knopka" onClick={handleLogin}>
//                   Войти как администратор
//             </button>
//         </header>
//     );
// }

