
import { Button, Card, Carousel, Col, Divider, Form, Image, Input, Layout, message, Row, theme, type FormProps } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { Typography } from 'antd'
import Silk from './components/Silk'
import RegisterForm from './components/RegisterForm'
import ImageCarousel from './components/ImageCarousel'
import CountdownToDate from './components/CountdownToDate'
import HereMap from './components/HereMap'
import GlassCard from './components/GlassCard'
import * as motion from "motion/react-client"

function App() {
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
      {/* <Layout style={{ padding: 0, backgroundColor: token.colorBgContainer }}> */}
      <Layout style={{ padding: 0 }}>
        <div
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
          <Silk
            speed={10}
            scale={1.2}
            color="#F2C0F2"
            noiseIntensity={0.2}
            rotation={0}
          />
        </div>

        <Content style={{ position: 'relative', zIndex: 1 }}>

          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>

            <Row align={'middle'} justify={'center'}>
              <Col xs={23} sm={22} md={16} lg={16} xl={12} xxl={12}>
                <GlassCard style={{ width: "100%", marginTop: '2vh', marginBottom: '2vh' }}>
                  <Row align={'middle'} justify={'center'}>
                    <Col span={22} style={{ marginBottom: 8 }}>
                      <Typography className='imperial-script-regular responsive-title' style={{ textAlign: 'center' }}>Celeste & Jairo</Typography>
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
                  </Row>
                </GlassCard>
              </Col>
            </Row>

          </motion.div>

        </Content>
      </Layout>
    </>
  )
}

export default App
