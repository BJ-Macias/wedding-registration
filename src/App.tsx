
import { Col, Divider, Image, Layout, message, Row, Space, Tag, theme, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import CountdownToDate from './components/CountdownToDate'
import GiftTable from './components/GiftTable'
import GlassCard from './components/GlassCard'
import HereMap from './components/HereMap'
import ImageCarousel from './components/ImageCarousel'
import RegisterForm from './components/RegisterForm'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import HeaderInfo from './components/HeaderInfo'
import CoupleInfo from './components/CoupleInfo'
import ScheduleInfo from './components/ScheduleInfo'
import BasicStuffSection from './components/BasicStuffSection'
import LocationInfo from './components/LocationInfo'

const { useToken } = theme

function App() {
  const screens = useBreakpoint()

  const { token } = useToken()



  return (
    <>
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

              <HeaderInfo />

              <CountdownToDate />

              <CoupleInfo />

              <ScheduleInfo />

              <ImageCarousel />

              <BasicStuffSection />

              <ImageCarousel />

              <LocationInfo />

              <RegisterForm />

              <GiftTable />
            </Col>
          </Row>
        </Content >
      </Layout >
    </>
  )
}

export default App
