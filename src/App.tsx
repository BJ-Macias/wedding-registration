
import { Col, Image, Layout, message, Row, theme, Typography } from 'antd'
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
            <Col xs={23} sm={22} md={16} lg={16} xl={12} xxl={12}>
              <Row align={'middle'} justify={'center'}>
                <Col span={24} style={{ marginTop: 80 }}>
                  <Typography className='tangerine-bold responsive-text' style={{ textAlign: 'center' }}>NEVER SAY NEVER</Typography>
                </Col>
                <Col span={2}>
                  <Typography className='imperial-script-regular responsive-subtitle' style={{ textAlign: 'center', lineHeight: 0.7 }}>04 05 26</Typography>
                </Col>
                <Col
                  span={14}
                  // style={{
                  //   backgroundImage: 'url(src/assets/chalkFrame.png)',
                  //   backgroundSize: 'cover',
                  //   backgroundPosition: 'center',
                  //   backgroundRepeat: 'no-repeat',
                  //   minHeight: '200px', // <-- Agrega altura mínima
                  //   display: 'flex',
                  //   alignItems: 'center',
                  //   justifyContent: 'center',
                  // }}

                  style={{
                    position: 'relative',
                    backgroundImage: 'url(src/assets/chalkFrame.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '35px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}

                >
                  <Row align={'middle'} justify={'center'} style={{ margin: 20, lineHeight: 0.7 }}>
                    <Col span={24} >
                      <SplitText
                        text="Celeste"
                        className="imperial-script-regular responsive-title"
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
                        className="imperial-script-regular responsive-title"
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
                  <Image src='src/assets/rings.png' preview={false} style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '+50px',
                    zIndex: 0,
                    width: '70px',
                    transform: 'rotate(+60deg)'
                  }} />
                </Col>
                <Col span={2}>
                  <Typography className='imperial-script-regular responsive-subtitle' style={{ textAlign: 'center', lineHeight: 0.7 }}>04 05 26</Typography>
                </Col>
                <Col span={24}>
                  <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>¡Acompáñanos en este día tan especial!</Typography>
                </Col>
                <Col span={24}>
                  <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>Quinta Majam</Typography>
                </Col>
              </Row>

              <Row align={'middle'} justify={'center'}>
                <Col span={22} style={{ marginTop: 30 }}>
                  <CountdownToDate />
                </Col>
              </Row>

              <RegisterForm />


              <ImageCarousel />
              <Row align={'middle'} justify={'center'} gutter={10}>
                <Col span={8}>
                  <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>Dirección:</Typography>
                  <Typography className='tangerine-regular responsive-text' style={{ textAlign: "center", cursor: "pointer" }} onClick={handleCopy}
                  >
                    {text}
                  </Typography>
                </Col>


                <Col span={14} style={{ height: "40vh", alignContent: 'center' }}>
                  <HereMap />
                </Col>

                <Col span={22}>
                  <GiftTable />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout >
    </>
  )
}

export default App
