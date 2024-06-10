'use client'
import React, { ReactNode } from 'react'
import Header from '../components/Layout/Header'
import Script from 'next/script'
import Footer from '../components/Layout/Footer'
import { useScrollTop } from '@/Helpers/hooks/useScrollTop'

const Template = ({ children }: { children: ReactNode }) => {
    const { ScrollTopElement } = useScrollTop()
    return (
        <>
            <Header />
            {children}
            <Script
                src="https://kit.fontawesome.com/4ef8c63dd7.js"
                crossOrigin="anonymous"
            />
            <ScrollTopElement />
            <Footer />
        </>
    )
}

export default Template