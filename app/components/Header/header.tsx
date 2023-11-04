"use client"

import { useState } from "react"

// import icons
import {AiOutlineClose} from "react-icons/ai"
import { BsPhone } from "react-icons/bs"

// ant design
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

export const Header = ()=> {
    // Show Strip header
    const [showStrip, setShowStrip ] = useState(true)
    /* ant design menu */
    const items: MenuProps['items'] = [
            {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
                </a>
            ),
            },
            {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
            },
            {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
                </a>
            ),
            disabled: true,
            },
            {
                key: '4',
                danger: true,
                label: 'a danger item',
            },
        ];

    return(
        <header className=" ">
            { showStrip && (
                <div className=" bg-bg-header h-16  flex justify-between items-center ">
                    <div className=" flex justify-start items-center pl-1  ">
                        <AiOutlineClose onClick={ ()=> setShowStrip(false)}/>
                    </div>
                    <div className=" flex justify-center items-center flex-grow">
                        <p className=" text-[#1455ad] text-sm font-bold sm:text-xs sm:font-normal "> 
                            Get 50% discount in all product from June 2023 to December2023 
                        </p>
                    </div>
                </div>
            )}
            <div className=" bg-[#fafafa] flex justify-between items-center">
                <div  className=" flex items-center gap-2 ">
                    <BsPhone/>  
                    <a className=" no-underline text-[#222] text-sm" href="tel: +213 67537717"> +213 67537717 </a>
                </div>
                <div className=" flex gap-4 items-center last:text-[#222] last:text-sm">
                    <div>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                USD $
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                English
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>Become a Seller</div>
                </div>
            </div>
            <div className="">
                <div>
                    <img src="/descount.png" alt="descount" />
                </div>
                <div></div>
                <div></div>
            </div>


        </header>
    )

}