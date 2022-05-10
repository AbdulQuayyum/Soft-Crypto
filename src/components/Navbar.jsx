import React from "react"
import {Button, Menu, Typography, Avatar} from "antd"
import {link} from "react-router-dom"
import {
HomeOutlined,
MoneyCollectOutlined,
BulbOutlined,
FundOutlined,
MenuOutlined
} from "@ant-design/icons"

const Navbar = () => {
return (
<div className="nav-container">
<div className="logo-container">
<Avatar src={icon} size="large" />
<Typography.Title level={2} className="logo">
<link to="/">Soft-Crypto</link>
</Typography.Title>
</div>
</div>
)
}

export default Navbar
