import React from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from "../config.json";


function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>

            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    font-size:24px;
                    font-weight: 600;
                    color: ${appConfig.theme.colors.neutrals['000']};
                }
            `}</style>

        </>
    )
}


//Componente React

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag='h2'>Boas Vindas de volta!</Titulo>
//             <h4>Discord - Alura Chat</h4>


//         </div>

//     )
//   }

//   export default HomePage


export default function PaginaInicial(props) {
    // const username = 'Liliamsn';

    
    const [username, setUsername] = React.useState('');
    

    //Criando a constante da rota
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[910],
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/12/vintage-computers-collection-1536x864.jpg)',
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', 
                        maxWidth: '700px',
                        borderRadius: '5px', 
                        padding: '32px', 
                        margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[1010],
                    }}
                >
                    {/* Formul??rio */}
                    <Box
                        as="form"
                        onSubmit={(evento)=> {
                            evento.preventDefault();

                            //Criando a rota sem o reload
                            roteamento.push(`/chat?username=${username}`);

                            //Forma antiga de direcionar uma p??gina
                            // window.location.href = '/chat'
                        }}

                        styleSheet={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            width: { 
                                xs: '100%', 
                                sm: '50%' 
                            }, 
                            textAlign: 'center', 
                            marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" 
                        styleSheet={{ 
                            marginBottom: '32px', 
                            color: appConfig.theme.colors.neutrals[900],
                            fontWeight: '600'
                            }}>
                            {appConfig.name}
                        </Text>
                        
                        <TextField
                            // value={username}
                            onChange={(evento)=> {
                                //Onde est?? o valor?
                                const valor = evento.target.value;
                                
                                //Trocar o valor da vari??vel
                                if(valor.length > 2) {

                                    setUsername(valor)
                                } else {

                                    setUsername('')
                                }

                                
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.primary[920],
                                },
                                
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.neutrals[1040],
                                mainColorLight: appConfig.theme.colors.neutrals[1030],
                                mainColorStrong: appConfig.theme.colors.neutrals[1040],
                            }}
                        />
                    </Box>
                    {/* Formul??rio */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.primary[920],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.primary[920],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            
                            src={`https://github.com/${username}.png`}
                        />

                        <Text
                            // variant="body4"
                            // styleSheet={{
                            //     color: appConfig.theme.colors.neutrals[200],
                            //     backgroundColor: appConfig.theme.colors.neutrals[1040],
                            //     padding: '3px 10px',
                            //     borderRadius: '1000px'
                            // }}
                        >
                            {/* {username} */}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}