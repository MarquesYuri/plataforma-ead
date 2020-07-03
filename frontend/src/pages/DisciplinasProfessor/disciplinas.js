import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import DashBoard from '../../components/Main/index';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '#'  },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '#' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '#' },
]

const materia = [
    { name: 'Matemática', link: '#', tipo: 'Turmas'},
]

const exercicios = [
    { name: '5°A - E.E. Estevam Placêncio', link: '#'},   
    { name: '5°B - E.E. Estevam Placêncio', link: '#'},
    { name: '5°C - E.E. Estevam Placêncio', link: '#'},   
    { name: '3°A - Colégio Objetivo', link: '#'},
    { name: '3°B - Colégio Objetivo', link: '#'},   
]

function Disciplinas() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <DashBoard items={materia} atividade={exercicios}/>
                </div>
            </div>
        )
};

export default Disciplinas;