import './styles.css';

import { useEffect, useState } from 'react';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';
//import { useNavigate } from 'react-router-dom';

export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();
    //const navigate = useNavigate();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
            })
        /* catch substituido pelo interceptor em src/utils/requests.ts
        .catch(error => {
            if (error.response.status === 401) {                
                navigate('/login');
            }
        })
        */
    }, []);

    return (
        <main>
            <section id="admin-home-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Bem-vindo à área administrativa, {user?.name}!</h2>
            </section>
        </main>
    )
}