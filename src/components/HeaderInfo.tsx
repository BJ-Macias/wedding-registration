import { Col, Row, Typography } from "antd"
import SplitText from "./SplitText"

const HeaderInfo = () => {
  return (
    <Row align={'middle'} justify={'space-evenly'} style={{ marginBottom: 120 }}>
      <Col span={24} style={{ marginTop: 150 }}>
        <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#869ed8', marginBottom: 10 }}>
          NEVER SAY NEVER
        </Typography>
      </Col>
      <Col span={2} xs={0} sm={2} md={3} lg={2} xl={2} xxl={2}>
        <Typography className='imperial-script-regular response-date-title' style={{ textAlign: 'center', lineHeight: 0.7 }}>02 05 26</Typography>
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
      <Col span={2} xs={0} sm={2} md={3} lg={2} xl={2} xxl={2}>
        <Typography className='imperial-script-regular response-date-title' style={{ textAlign: 'center', lineHeight: 0.7 }}>02 05 26</Typography>
      </Col>
      <Col span={24} style={{ marginTop: 20 }}>
        <Typography className='comic-relief-bold responsive-subtitle' style={{ textAlign: 'center', color: '#869ed8' }}>¡Acompáñanos en este día tan especial!</Typography>
      </Col>
      <Col span={24}>
        <Typography className='meow-script-regular responsive-subsection' style={{ textAlign: 'center', color: '#9dadfb' }}>Quinta Majam</Typography>
      </Col>
    </Row>
  )
}

export default HeaderInfo