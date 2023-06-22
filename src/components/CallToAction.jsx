import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types'
import { colors } from '../utils/theme'

/**
 * Display a call to action as an inline text.
 * @param {object} props - The props object containing the following properties:
 * @param {string}  props.type - The type of the button : "primaire" or "secondaire"
 * @param {string}  props.text - The text of the button.
 * @param {string}  props.href - The route or URL of the button.
 * @param {string}  props.target - If the target of the link is "interne" or "externe"
 * @returns {JSX.Element} - The JSX markup for the CallToAction component.
 */
function CallToAction({type, text, href, target}){
    return(
        <>
            <GlobalStyle />
            {type != "phone" && target === "interne" &&
                <Link  
                    className={
                        type === "secondaire" && "cta cta_secondaire" || 
                        type === "primaire" && "cta cta_primaire"    
                    }
                    to={href}
                    >
                    {text}
                </Link>
            }
            {type === "phone" && target === "externe" &&
                <a  
                    className={
                        type === "secondaire" && "cta cta_secondaire" || 
                        type === "primaire" && "cta cta_primaire" || 
                        type === "phone" && "cta cta_secondaire cta_phone"     
                    }
                    href={href}
                    target={type != "phone" && "_blank"}
                    >
                    {type === "phone" && 
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
                        </svg>
                    }
                    {text}
                </a>
            }
        </>
    )
}

export default CallToAction

CallToAction.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
}

const GlobalStyle = createGlobalStyle`
  .cta {
    padding: 0.7rem 1.6rem 0.8rem 1.6rem;
    border: none;
    border-radius: 2rem;
    line-height:1;
    font-weight:bold;
    font-size: 0.85rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    &.cta_primaire{
        background-color: ${colors.primaire};
        color: #fff;
        transition: 0.1s background-color ease-in-out;
        &:hover{
            background-color: ${colors.secondaire};
            transition: 0.1s background-color ease-in-out;
        }
    }
    &.cta_secondaire{
        background-color: transparent;
        color: ${colors.secondaire};
        border: 1px solid ${colors.secondaire};
        transition: 0.1s background-color ease-in-out, 0.05s color ease-in-out;
        &:hover{
            background-color: ${colors.secondaire};
            color:#fff;
            transition: 0.1s background-color ease-in-out, 0.05s color ease-in-out;
        }
        &.cta_phone{
            & svg{
                fill: ${colors.secondaire1};
                margin-right:0.3rem;
                vertical-align:-0.1rem;
            }
        }
    }
  }
`