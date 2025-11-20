import { SendOutlined, UserAddOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Col, Form, Row, Typography, type AutoCompleteProps, type FormProps } from 'antd';
import type { FieldNamesType } from 'antd/es/cascader';
import { useState } from 'react';
import GlassCard from './GlassCard';

type FieldType = {
  name?: string
}

const RegisterForm = () => {

  const [value, setValue] = useState('')
  const [options] = useState<AutoCompleteProps['options']>([
    { value: 'Celeste' },
    { value: 'Jairo' }
  ])

  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    console.log('Success:', value)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Row align={'middle'} justify={'center'} style={{ marginBottom: 90 }}>
        <Col span={12}  xs={24} sm={24} md={16} lg={10} xxl={10}>
          <GlassCard style={{ width: "auto", cursor: "pointer", alignContent: 'center', justifyContent: 'center'}}>
            <Row align={'middle'} justify={'center'} >
              <Col span={20}>
                <Typography className='tangerine-bold responsive-subsection' style={{ textAlign: 'center' }}>Confirma tu Asistencia</Typography>
              </Col>
              <Col span={20} style={{ textAlign: 'center', marginBottom: 10 }}>
                <UserAddOutlined className='responsive-countdown-text' />
              </Col>
              <Col span={20}>
                <Form
                  name="assists"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item<FieldNamesType>
                    layout="vertical"
                    rules={[{ required: true, message: 'Confirma tu asistencia!' }]}
                  >
                    <AutoComplete
                      options={options}
                      onSelect={(e) => setValue(e)}
                      placeholder='Ingresa tu nombre...' />
                  </Form.Item>

                  <Form.Item label={null}>
                    <Button icon={<SendOutlined />} block type="primary" htmlType="submit">
                      Confirmar Asistencia
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </GlassCard>
        </Col>
      </Row>
    </>
  )
}

export default RegisterForm