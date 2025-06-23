import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import comunityPic from "../../assets/people.avif";
import classes from './Questions.module.css';

export function FaqWithImage() {
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image src={comunityPic} radius={25} alt="Întrebări frecvente" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Întrebări frecvente
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="sprijin-emotional" variant="separated">
                            <Accordion.Item className={classes.item} value="sprijin-emotional">
                                <Accordion.Control>Cum pot găsi sprijin emoțional în această comunitate?</Accordion.Control>
                                <Accordion.Panel>
                                    Platforma noastră oferă grupuri de suport, povești personale și un forum unde poți împărtăși experiențele tale și poți discuta cu alți membri care înțeleg prin ce treci. De asemenea, poți trimite mesaje private altor utilizatori pentru discuții mai personale.
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="creeaza-cont">
                                <Accordion.Control>Trebuie să îmi creez un cont pentru a folosi platforma?</Accordion.Control>
                                <Accordion.Panel>
                                    Da, pentru a putea interacționa cu alți membri, a posta povești sau a participa la discuții, este necesar să îți creezi un cont. Însă poți naviga pe anumite pagini publice fără să fii autentificat.
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="informatii-medicale">
                                <Accordion.Control>Găsesc informații medicale de încredere pe această platformă?</Accordion.Control>
                                <Accordion.Panel>
                                    Platforma oferă articole educaționale și sfaturi validate de specialiști, însă nu înlocuiește un consult medical. Îți recomandăm să consulți un medic pentru informații personalizate despre sănătatea ta.
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="implicare">
                                <Accordion.Control>Cum mă pot implica mai activ în comunitate?</Accordion.Control>
                                <Accordion.Panel>
                                    Poți contribui prin împărtășirea poveștii tale, oferind sprijin altor membri, participând la discuții în forum sau devenind voluntar pentru inițiativele comunității noastre.
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}
