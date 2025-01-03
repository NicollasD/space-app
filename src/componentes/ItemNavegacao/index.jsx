import { styled } from "styled-components";


const ItemListaEstilizado = styled.li`
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-bottom: 1.875rem;
    cursor: pointer;
    color: ${ props => props.$ativo ? "#7B78E5" : "#D9D9D9" };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 1.375rem;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} />
            {children}
        </ItemListaEstilizado>
    );
}

export default ItemNavegacao;