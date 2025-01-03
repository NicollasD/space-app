import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;

`;

const CampoTextoEstilizado = styled.input`
height: 3.5rem;
padding: 0.75rem 1rem;
border-radius: 0.625rem;
border: 2px solid;
border-color: #C98CF1;
background: transparent;
box-sizing: border-box;
width: 566px;
color: #D9D9D9;
font-weight: 400;
font-size: 1.25rem;
line-height: 1.25rem;
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 17px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
            onChange={(evento) => { setFiltro(evento.target.value) }}
            type="text"
            placeholder="O que você procura?" />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}
export default CampoTexto;