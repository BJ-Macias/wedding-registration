
import { Col, Layout, message, Row, theme, Typography } from 'antd'
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
        backgroundImage: "url('src/assets/backGroundVertical.jpg')",
        backgroundSize: 'cover',   // se adapta al ancho/alto
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
        {/* <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <Image preview={false} src='src/assets/backGroundMinimal.jpg'/>
        </div> */}

        <Content style={{ position: 'relative', zIndex: 1 }}>
          <Row align={'middle'} justify={'center'} >
            <Col xs={23} sm={22} md={16} lg={16} xl={12} xxl={12}>
              <GlassCard style={{ width: "100%", marginTop: '2vh', marginBottom: '2vh' }}>
                <Row align={'middle'} justify={'center'}>
                  <Col span={22} style={{ marginBottom: 8, alignItems: 'center' }}>
                    <SplitText
                      text="Celeste & Jairo"
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
                    {/* <Typography className='imperial-script-regular responsive-title'>Celeste & Jairo</Typography> */}
                    <Typography className='tangerine-bold responsive-subtitle' style={{ textAlign: 'center' }}>Mayo 2, 2026 - Quinta Majam</Typography>
                  </Col>
                </Row>

                <ImageCarousel />

                <Row align={'middle'} justify={'center'}>
                  <Col span={22} style={{ marginTop: 30 }}>
                    <CountdownToDate />
                  </Col>
                </Row>

                <RegisterForm />

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
              </GlassCard>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export default App
