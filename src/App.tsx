
import { Col, Divider, Image, Layout, message, Row, Space, Tag, theme, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import CountdownToDate from './components/CountdownToDate'
import GiftTable from './components/GiftTable'
import GlassCard from './components/GlassCard'
import HereMap from './components/HereMap'
import ImageCarousel from './components/ImageCarousel'
import RegisterForm from './components/RegisterForm'
import SplitText from './components/SplitText'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';


const { useToken } = theme

function App() {
  const screens = useBreakpoint();

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
        <Image className='resposive-xl-background-image' src='src/assets/stars.png' preview={false} style={{
          position: 'absolute',
          top: '-20px',
          left: '-147px',
          zIndex: 0,

        }} />
        <Image className='resposive-xl-background-image' src='src/assets/rings.png' preview={false} style={{
          position: 'absolute',
          top: '-80px',
          right: '-100px',
          zIndex: 0,

          transform: 'rotate(-110deg)'
        }} />
        <Image src='src/assets/stars.png' preview={false} style={{
          position: 'absolute',
          top: '+90px',
          right: '+200px',
          zIndex: 0,
          width: '70px',
        }} />
        <Content style={{ position: 'relative', zIndex: 1 }}>
          <Row align={'middle'} justify={'center'} >
            <Col xs={23} sm={23} md={16} lg={16} xl={16} xxl={16}>
              <Row align={'middle'} justify={'space-evenly'} style={{ marginBottom: 120 }}>
                <Col span={24} style={{ marginTop: 150 }}>
                  <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#869ed8', marginBottom: 30 }}>
                    NEVER SAY NEVER
                  </Typography>
                </Col>
                <Col span={2} xs={0} sm={2} md={2} lg={2} xl={2} xxl={2}>
                  <Typography className='imperial-script-regular response-date-title' style={{ textAlign: 'center', lineHeight: 0.7 }}>04 05 26</Typography>
                </Col>
                <Col
                  span={14} xs={24} sm={20} md={18} lg={16} xl={18} xxl={18}
                  className='responsive-chalkframe-pading'
                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/chalkFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
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
                <Col span={2} xs={0} sm={2} md={2} lg={2} xl={2} xxl={2}>
                  <Typography className='imperial-script-regular response-date-title' style={{ textAlign: 'center', lineHeight: 0.7 }}>04 05 26</Typography>
                </Col>
                <Col span={24} style={{ marginTop: 20 }}>
                  <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#869ed8' }}>¡Acompáñanos en este día tan especial!</Typography>
                </Col>
                <Col span={24}>
                  <Typography className='meow-script-regular responsive-subsection' style={{ textAlign: 'center', color: '#9dadfb' }}>Quinta Majam</Typography>
                </Col>
              </Row>

              <Row align={'middle'} justify={'center'}>
                <Col span={24} style={{ marginBottom: 160 }}>
                  <CountdownToDate />
                </Col>
              </Row>

              <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 120 }}>
                <Col span={10} xs={23} sm={23} md={22} lg={10} xxl={10}
                  className={`responsive-padding-col ${screens.lg ? 'rotate-frame' : ''}`}
                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/verticalFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}>
                  <Row align={'middle'} justify={'center'}>
                    <Col span={24}>
                      <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#9dadfb' }}>DE LA "A" A LA "Z"</Typography>
                    </Col>
                    <Col span={24}>
                      <Typography className='meow-script-regular response-date-title' style={{ color: '#869ed8' }}>Cel & Jairo</Typography>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image src='src/assets/rings.png' preview={false} style={{
                        width: '90px',
                        transform: 'rotate(28deg)'
                      }} />
                    </Col>
                    <Col span={24}>
                      <Typography
                        className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                        style={{ textAlign: 'center', color: '#869ed8' }}>
                        Nos conocimos en nuestro taller de preparatoria, iniciamos nuestro noviazgo 1 mes antes de graduarnos y, ahora, tras 10 años que se han presentado como una montaña rusa, conel amor como guía, hemos decidido enlazar nuestras vidas ante la ley, para toda la vida... Y después de esta...
                      </Typography>
                    </Col>
                  </Row>
                </Col>
                <Col span={7} xs={23} sm={23} md={22} lg={10} xxl={7}>
                  <Row align={'middle'} justify={'center'} className={!screens.lg ? 'responsive-padding-col' : ''}>
                    <Space direction='vertical' size={'large'}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='src/assets/giftTable.png' preview={false} style={{
                          width: '160px'
                        }} />
                      </Col>
                      <Col span={24}>
                        <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#9dadfb' }}>How did we meet, anyway?</Typography>
                      </Col>
                      <Col span={24}>
                        <Typography
                          className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                          style={{ textAlign: 'center', color: '#869ed8' }}>
                          Nos conocimos en un taller de la preparatoria, y empezamos nuestra relación 1 mes antes de salir de la misma... Y dijeron que no durariamos porque nuestras casas se encontraban a solo 44km de distancia... LOL
                        </Typography>
                      </Col>
                    </Space>
                  </Row>
                </Col>
                <Col span={7} xs={23} sm={23} md={22} lg={10} xxl={7}>
                  <Row align={'middle'} justify={'center'} className={!screens.lg ? 'responsive-padding-col' : ''}>
                    <Space direction='vertical' size={'large'}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src='src/assets/ringBox.png' preview={false} style={{
                          width: '140px'
                        }} />
                      </Col>
                      <Col span={24}>
                        <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#9dadfb' }}>How the question was popped?</Typography>
                      </Col>
                      <Col span={24}>
                        <Typography
                          className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                          style={{ textAlign: 'center', color: '#869ed8' }}>
                          Ella le dijo: “en la playa no” y él dijo “si se lo pido en la playa no lo va a sospechar” and here we are...
                        </Typography>
                      </Col>
                    </Space>
                  </Row>
                </Col>
              </Row>

              <Row align={'top'} justify={'center'} style={{ marginBottom: 390 }}>
                <Col span={12} xs={24} sm={24} md={22} lg={11} xxl={11} style={{ padding: '0px 10px' }}>
                  <Row align={'top'} justify={'space-around'}>
                    <Col span={22}>
                      <Typography
                        className='meow-script-regular responsive-subsection'
                        style={{ textAlign: 'start', color: '#9dadfb' }}>Y así será...
                      </Typography>
                    </Col>
                    <Col span={22}>
                      <Typography className='comic-relief-bold responsive-subtitle' style={{ color: '#869ed8' }}>02.Mayo.2026</Typography>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                      <Image className='responsive-cake-image-width' src='src/assets/cake.png' preview={false} />
                    </Col>
                  </Row>
                </Col>
                <Col span={12} xs={24} sm={23} md={22} lg={11} xxl={11}>
                  <Row align={'top'} justify={'start'}>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', margin: '0 0 20px 0' }}>
                      <Image className='responsive-cups-image-width' src='src/assets/cups.png' preview={false} />
                    </Col>
                    <Col span={24}>
                      <Row align={'middle'} justify={'start'}
                        className='responsive-padding-schedule'
                        style={{
                          position: 'relative',
                          backgroundImage: 'url(src/assets/smallFrame.png)',
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          height: '100%',
                          boxSizing: 'border-box',
                        }}>
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:00 PM</Typography></Col>
                        <Col span={15}>
                          <Tag
                            color="#869ed8"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Ingreso</Tag>
                        </Col>
                        <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>05:30 PM</Typography>
                        </Col>
                        <Col span={15}>
                          <Tag
                            color="#9dadfb"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Ceremonia Civil</Tag>
                        </Col>
                        <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
                        <Col span={9}><Typography className='comic-relief-bold responsive-text'>06:00 PM</Typography></Col>
                        <Col span={15}>
                          <Tag
                            color="#869ed8"
                            className='comic-relief-bold responsive-text'
                            style={{ height: 30, alignContent: 'center' }}>Drinksitos</Tag>
                        </Col>
                        <Divider size={screens.lg ? 'large' : 'small'} style={{ borderColor: '#869ed8' }} />
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

              <Row align={'middle'} justify={'center'} gutter={20} style={{ marginBottom: 300 }}>
                <Col span={24} xs={23} sm={23} md={23} lg={16} xxl={16}
                  className='responsive-padding-stuff-section'
                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/chalkFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxSizing: 'border-box',
                    marginBottom: 30
                  }}>
                  <Typography
                    className='meow-script-regular response-date-title'
                    style={{ color: '#869ed8' }}>
                    The Basic Stuff
                  </Typography>
                </Col>
                <Row align={'middle'} justify={'center'} gutter={40}>
                  <Col xs={24} sm={24} md={16} lg={8} xxl={8}>
                    <Row align={'middle'} justify={'center'}
                      className='responsive-padding-stuff-1'
                      style={{
                        position: 'relative',
                        backgroundImage: 'url(src/assets/verticalFrame.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',// Ajusta según el diseño del marco
                        boxSizing: 'border-box',
                      }}>
                      <Space direction='vertical' size={'middle'}>
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                          <Image className='responsive-shoes-image-width' src='src/assets/shoes.png' preview={false} />
                        </Col>
                        <Col span={24}>
                          <Typography
                            className='comic-relief-bold responsive-subtitle'
                            style={{ textAlign: 'center', color: '#869ed8' }}>
                            DRESS CODE
                          </Typography>
                        </Col>
                        <Col span={24}>
                          <Typography
                            className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                            style={{ textAlign: 'center', color: '#9dadfb' }}>
                            Formal
                          </Typography>
                        </Col>
                      </Space>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={16} lg={8} xxl={8}>
                    <Row align={'middle'} justify={'center'}
                      className='responsive-padding-stuff-2'
                      style={{
                        position: 'relative',
                        backgroundImage: 'url(src/assets/verticalFrame.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        boxSizing: 'border-box',
                      }}>
                      <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <Image src='src/assets/letter.png' preview={false} style={{ width: '160px' }} />
                      </Col>
                      <Col span={24}>
                        <Typography className='comic-relief-bold responsive-subtitle'
                          style={{ textAlign: 'center', color: '#869ed8' }} >
                          MESA DE REGALOS
                        </Typography>
                      </Col>
                      <Col span={24}>
                        <Typography
                          className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                          style={{ textAlign: 'center', color: '#9dadfb' }}>
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
                  <Col xs={24} sm={24} md={16} lg={8} xxl={8}
                    className='responsive-padding-stuff-3'
                    style={{
                      position: 'relative',
                      backgroundImage: 'url(src/assets/verticalFrame.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      boxSizing: 'border-box',
                    }}>
                    <Row align={'middle'} justify={'center'}>
                      <Space direction='vertical' size={'large'}>
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                          <Image src='src/assets/notes.png' preview={false} style={{ width: '180px' }} />
                        </Col>
                        <Col span={24}>
                          <Typography className='comic-relief-bold responsive-subtitle'
                            style={{ textAlign: 'center', color: '#869ed8' }}>
                            SONG REQUEST
                          </Typography>
                        </Col>
                        <Col span={24}>
                          <Typography
                            className={screens.lg ? 'tinos-regular-italic-xl' : 'tinos-regular-italic'}
                            style={{ textAlign: 'center', color: '#9dadfb' }}>
                            Envíanos una canción que te guste, trataremos de que la escuches en el transcurso de la noche
                          </Typography>
                        </Col>
                      </Space>
                    </Row>
                  </Col>
                </Row>
              </Row>

              <ImageCarousel />

              <GlassCard style={{ width: "auto", cursor: "pointer", alignContent: 'center', justifyContent: 'center', marginBottom: 160 }}>
                <Row align={'middle'} justify={'space-around'} gutter={10}>
                  <Col span={10} xs={24} sm={24} md={16} lg={8} xxl={8}>
                    <Typography className='tinos-regular-italic responsive-subtitle' style={{ textAlign: 'center' }}>Dirección del evento:</Typography>
                    <Typography className='tinos-regular-italic responsive-text' style={{ textAlign: "center", cursor: "pointer" }} onClick={handleCopy}>
                      {text}
                    </Typography>
                  </Col>
                  <Col span={14} xs={24} sm={24} md={16} lg={12} xxl={12}
                    style={{ height: "40vh", alignContent: 'center' }}>
                    <HereMap />
                  </Col>
                </Row>

              </GlassCard>

              <RegisterForm />

              <Row>
                <Col span={24}>
                  <GiftTable />
                </Col>
              </Row>

            </Col>
          </Row>
        </Content >
      </Layout >
    </>
  )
}

export default App
