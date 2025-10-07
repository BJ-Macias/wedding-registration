
import { Col, Divider, Image, Layout, message, Row, Space, Tag, theme, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import CountdownToDate from './components/CountdownToDate'
import GiftTable from './components/GiftTable'
import GlassCard from './components/GlassCard'
import HereMap from './components/HereMap'
import ImageCarousel from './components/ImageCarousel'
import RegisterForm from './components/RegisterForm'
import SplitText from './components/SplitText'

const { useToken } = theme

function App() {
  const { token } = useToken()

  const [messageApi, contextHolder] = message.useMessage()
  const text = "Lindavista S/N, Villas de Monticello, 45200 Zapopan, Jal."

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      messageApi.success("¡Texto copiado!")
    } catch {
      messageApi.error("No se pudo copiar")
    }
  }

  return (
    <>
      {contextHolder}
      <Layout style={{
        padding: 0,
        backgroundColor: token.colorBgContainer,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Image src='src/assets/stars.png' preview={false} style={{
          position: 'absolute',
          top: '-20px',     // sobresale hacia arriba
          left: '-147px',    // sobresale hacia la izquierda
          zIndex: 0,
          width: '300px',   // ajusta según el tamaño deseado
        }} />
        <Image src='src/assets/rings.png' preview={false} style={{
          position: 'absolute',
          top: '-80px',     // sobresale hacia arriba
          right: '-100px',    // sobresale hacia la izquierda
          zIndex: 0,
          width: '350px',   // ajusta según el tamaño deseado
          transform: 'rotate(-110deg)'
        }} />
        <Image src='src/assets/stars.png' preview={false} style={{
          position: 'absolute',
          top: '+90px',     // sobresale hacia arriba
          right: '+200px',    // sobresale hacia la izquierda
          zIndex: 0,
          width: '70px',   // ajusta según el tamaño deseado
        }} />
        <Content style={{ position: 'relative', zIndex: 1 }}>
          <Row align={'middle'} justify={'center'} >
            <Col xs={22} sm={22} md={16} lg={16} xl={14} xxl={14}>
              <Row align={'middle'} justify={'center'} style={{ marginBottom: 90 }}>
                <Col span={24} style={{ marginTop: 80 }}>
                  <Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>NEVER SAY NEVER</Typography>
                </Col>
                <Col span={2}>
                  <Typography className='imperial-script-regular  responsive-subtitle' style={{ textAlign: 'center', lineHeight: 0.7 }}>04 05 26</Typography>
                </Col>
                <Col
                  span={14}
                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/chalkFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '50px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}

                >
                  <Row align={'middle'} justify={'center'} style={{ lineHeight: 0.8 }}>
                    <Col span={24} >
                      <SplitText
                        text="Celeste"
                        className="meow-script-regular responsive-title"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                      />
                    </Col>
                    <Col span={24}>
                      <SplitText
                        text="& Jairo"
                        className="meow-script-regular responsive-title"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                      />
                    </Col>
                  </Row>
                  {/* <Image src='src/assets/rings.png' preview={false} style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '+50px',
                    zIndex: 0,
                    width: '70px',
                    transform: 'rotate(+60deg)'
                  }} /> */}
                </Col>
                <Col span={2}>
                  <Typography className='imperial-script-regular responsive-subtitle' style={{ textAlign: 'center', lineHeight: 0.6 }}>04 05 26</Typography>
                </Col>
                <Col span={24} style={{ marginTop: 20 }}>
                  <Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>¡Acompáñanos en este día tan especial!</Typography>
                </Col>
                <Col span={24}>
                  <Typography className='meow-script-regular responsive-subtitle' style={{ textAlign: 'center' }}>Quinta Majam</Typography>
                </Col>
              </Row>

              <Row align={'middle'} justify={'center'}>
                <Col span={22} style={{ marginBottom: 90 }}>
                  <CountdownToDate />
                </Col>
              </Row>

              <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 120 }}>
                <Col span={10}
                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/verticalFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '100px 65px',
                    height: '100%',
                    boxSizing: 'border-box',
                    transform: 'rotate(-10deg)'
                  }}
                >
                  <Row align={'middle'} justify={'center'}>
                    <Col span={24}>
                      <Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>DE LA "A" A LA "Z"</Typography>
                    </Col>
                    <Col span={24}>
                      <Typography className='meow-script-regular responsive-subtitle'>Cel & Jairo</Typography>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src='src/assets/rings.png' preview={false} style={{
                        width: '80px',
                        transform: 'rotate(28deg)'
                      }} />
                    </Col>
                    <Col span={24}>
                      <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                        Nos conocimos en nuestro taller de preparatoria, iniciamos nuestro noviazgo 1 mes antes de graduarnos y, ahora, tras 10 años que se han presentado como una montaña rusa, conel amor como guía, hemos decidido enlazar nuestras vidas ante la ley, para toda la vida... Y después de esta...
                      </Typography>
                    </Col>
                  </Row>
                </Col>
                <Col span={7}>
                  <Row align={'middle'} justify={'center'}>
                    <Space direction='vertical' size={'large'}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='src/assets/giftTable.png' preview={false} style={{
                          width: '120px'
                        }} />
                      </Col>
                      <Col span={24}>
                        <Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>How did we meet, anyway?</Typography>
                      </Col>
                      <Col span={24}>
                        <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                          Nos conocimos en un taller de la preparatoria, y empezamos nuestra relación 1 mes antes de salir de la misma... Y dijeron que no durariamos porque nuestras casas se encontraban a solo 44km de distancia... LOL
                        </Typography>
                      </Col>
                    </Space>
                  </Row>
                </Col>
                <Col span={7}>
                  <Row align={'middle'} justify={'center'}>
                    <Space direction='vertical' size={'large'}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='src/assets/ringBox.png' preview={false} style={{
                          width: '120px'
                        }} />
                      </Col>
                      <Col span={24}>
                        <Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>How the question was popped?</Typography>
                      </Col>
                      <Col span={24}>
                        <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                          Ella le dijo: “en la playa no” y él dijo “si se lo pido en la playa no lo va a sospechar” and here we are...
                        </Typography>
                      </Col>
                    </Space>
                  </Row>
                </Col>
              </Row>

              <Row align={'top'} justify={'start'} style={{ marginBottom: 120 }}>
                <Col span={12}>
                  <Row align={'top'} justify={'start'}>
                    <Col span={24}>
                      <Typography className='meow-script-regular responsive-subtitle' style={{ textAlign: 'start' }}>Y así será...</Typography>
                    </Col>
                    <Col span={24}>
                      <Typography className='comic-relief-bold responsive-text'>02.Mayo.2026</Typography>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src='src/assets/cake.png' preview={false} style={{ width: '220px' }} />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row align={'top'} justify={'start'}>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                      <Image src='src/assets/cups.png' preview={false} style={{ width: '120px' }} />
                    </Col>
                    <Col span={24} style={{
                      position: 'relative',
                      backgroundImage: 'url(src/assets/smallFrame.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      padding: '80px 70px', // Ajusta según el diseño del marco
                      height: '100%', // Asegura que el fondo se muestre completo
                      boxSizing: 'border-box',
                    }}>
                      <Row align={'middle'} justify={'start'} >
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:00 PM</Typography></Col>
                        <Col span={15}>
                          <Tag
                            color="#869ed8"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Ingreso</Tag>
                        </Col>
                        <Divider size='middle' style={{ borderColor: '#869ed8' }} />
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:30 PM</Typography>
                        </Col>
                        <Col span={15}>
                          <Tag
                            color="#9dadfb"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Ceremonia Civil</Tag>
                        </Col>
                        <Divider size='middle' style={{ borderColor: '#869ed8' }} />
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>06:00 PM</Typography></Col>
                        <Col span={15}>
                          <Tag
                            color="#869ed8"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Drinksitos</Tag>
                        </Col>
                        <Divider size='middle' style={{ borderColor: '#869ed8' }} />
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>07:00 PM</Typography></Col>
                        <Col span={15}>
                          <Tag
                            color="#9dadfb"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Bailongo</Tag>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <ImageCarousel />

              <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 90 }}>
                <Col span={24} style={{
                  position: 'relative',
                  backgroundImage: 'url(src/assets/chalkFrame.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  padding: '90px 10px', // Ajusta según el diseño del marco
                  boxSizing: 'border-box',
                  marginBottom: 30
                }}>
                  <Typography className='meow-script-regular responsive-subtitle'>The Basic Stuff</Typography>
                </Col>
                <Row align={'middle'} justify={'center'} gutter={140}>
                  <Col span={8} style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/verticalFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '134px 00px', // Ajusta según el diseño del marco
                    boxSizing: 'border-box',
                  }}>
                    <Row align={'middle'} justify={'center'}>
                      <Space direction='vertical' size={'middle'}>
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                          <Image src='src/assets/shoes.png' preview={false} style={{ width: '130px' }} />
                        </Col>
                        <Col span={24}><Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>DRESS CODE</Typography></Col>
                        <Col span={24}>
                          <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                            Formal
                          </Typography>
                        </Col>
                      </Space>
                    </Row>
                  </Col>
                  <Col span={8} style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/verticalFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '98px 40px', // Ajusta según el diseño del marco
                    boxSizing: 'border-box',
                  }}>
                    <Row align={'middle'} justify={'center'}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <Image src='src/assets/letter.png' preview={false} style={{ width: '160px' }} />
                      </Col>
                      <Col span={24}><Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }} >MESA DE REGALOS</Typography></Col>
                      <Col span={24}>
                        <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                          Tu presencia es lo más importante para
                          nosotros, sin embargo, agradecemos
                          dentro de lo posible que los obsequios
                          sean mediante las mesas de regalo por
                          cuestiones de logística y transporte,
                          regalos en efectivo o transferencia para
                          nuestro Honeymoon Fund también son
                          bienvenidos
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8} style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/verticalFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '130px 36px', // Ajusta según el diseño del marco
                    boxSizing: 'border-box',
                  }}>
                    <Row align={'middle'} justify={'center'}>
                      <Space direction='vertical' size={'large'}>
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                          <Image src='src/assets/notes.png' preview={false} style={{ width: '180px' }} />
                        </Col>
                        <Col span={24}><Typography className='comic-relief-bold responsive-text' style={{ textAlign: 'center' }}>SONG REQUEST</Typography></Col>
                        <Col span={24}>
                          <Typography style={{ fontSize: 16, textAlign: 'center' }}>
                            Envíanos una canción que te guste, trataremos de que la escuches en el transcurso de la noche
                          </Typography>
                        </Col>
                      </Space>
                    </Row>
                  </Col>
                </Row>
              </Row>

              <Row>
                <Col span={24}>
                  <GiftTable />
                </Col>
              </Row>

              <ImageCarousel />

              <Row align={'middle'} justify={'center'} gutter={10} style={{ marginBottom: 30 }}>
                <Col span={10}>
                  <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>Dirección:</Typography>
                  <Typography className='tangerine-regular responsive-text' style={{ textAlign: "center", cursor: "pointer" }} onClick={handleCopy}>
                    {text}
                  </Typography>
                </Col>
                <Col span={14} style={{ height: "40vh", alignContent: 'center' }}>
                  <HereMap />
                </Col>
              </Row>

              <RegisterForm />
            </Col>
          </Row>
        </Content >
      </Layout >
    </>
  )
}

export default App
