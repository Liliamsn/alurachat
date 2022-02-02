import { Box, Icon } from '@skynexui/components';
import appConfig from "../config.json";
import Link from 'next/link';


export default function Conteudo() {

    return(

        <Box
        styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals["1050"],
            backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/02/86/36/73/1000_F_286367382_3A1UO4nmDiWtOTRRZUl6NJMkvToiDtu6.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            color: 'white',
        }}
        >
            <Box
            styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                marginTop: '2rem',
                marginLeft: '2rem',
            }}
            >
                
                <Link href='/'>
                    <a>
                    Home
                    </a>
                </Link>
            </Box>

        </Box>
        
                
            
    )
}


