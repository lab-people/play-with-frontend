import { Layout } from 'antd';
import styled from 'styled-components';

const BaseHeader = () => {

    const { Header } = Layout

    return (
        <Header style={{
            backgroundColor: '#fff',
            borderBottom: '1px solid #E5E5E5'
        }}>
            <text>연구소</text>
        </Header>
    )
}

export default BaseHeader