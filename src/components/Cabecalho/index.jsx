import { styled } from "styled-components";
import BarraSearch from "../CampoTexto";

const HeaderEstilizado = styled.header`
padding:60px 1rem;
display:flex;
justify-content:space-between;
img{
    max-width:212px;

}
`

const Cabecalho = () =>{
    return(
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="logo" />
            <BarraSearch />
        </HeaderEstilizado>
    )
}

export default Cabecalho;