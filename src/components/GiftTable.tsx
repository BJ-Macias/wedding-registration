import { AmazonOutlined, GiftFilled, GiftOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Col, Row, Typography } from "antd"
import Title from "antd/es/typography/Title"
import GlassCard from "./GlassCard"
import Link from "antd/es/typography/Link"

const GiftTable = () => {
  return (
    <Row justify={'center'} align={'middle'} gutter={12} style={{ textAlign: 'center', marginTop: 40, marginBottom: 90 }} >
      <Col span={22}>
        <Title className="tangerine-bold responsive-title">Mesas de Regalos</Title>
      </Col>

      <Col span={8}>
        <Link
          href="https://www.amazon.com.mx/wedding"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <GlassCard style={{ width: "100%", cursor: "pointer" }}>
            <AmazonOutlined className="responsive-title" />
            <Typography className="tangerine-bold response-date-title">Amazon</Typography>
          </GlassCard>
        </Link>
      </Col>

      <Col span={8}>
        <Link
          href="https://www.liverpool.com.mx/tienda/mesas-de-regalos"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <GlassCard style={{ width: "100%", cursor: "pointer" }}>
            <GiftOutlined className="responsive-title" />
            <Typography className="tangerine-bold response-date-title">Liverpool</Typography>
          </GlassCard>
        </Link>
      </Col>

      <Col span={8}>
        <Link
          href="https://www.sears.com.mx/mesas-de-regalos"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <GlassCard style={{ width: "100%", cursor: "pointer" }}>
            <ShoppingCartOutlined className="responsive-title" />
            <Typography className="tangerine-bold response-date-title">Sears</Typography>
          </GlassCard>
        </Link>
      </Col>

      <Col span={24} style={{ marginTop: 12 }}>
        <GlassCard style={{ width: "100%", padding: 6 }}>
          <GiftFilled className="responsive-title" />
          <Typography className="tangerine-regular response-date-title">
            También puedes hacer tu aportación en efectivo o transferencia.
          </Typography>
        </GlassCard>
      </Col>

    </Row>
  )
}

export default GiftTable