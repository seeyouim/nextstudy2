import Menu1 from '../page';
import './menu1.css';
// 레이아웃은 반드시 인자(props)를 받아야 한다.
export default function Layout(props) {
    return(
        <>
            {props.params.id === '1' ? <Menu1 /> : props.params.id === '2' ?<Menu2 z/> : <Menu3 />}
        </>
    )
}