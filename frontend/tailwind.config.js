/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'ui-sans-serif', 'system-ui'], // 기본 sans-serif를 Pretendard로 설정
            },
            fontSize: {
                // Heading
                display: ['64px', 'auto'], // <h1> 스타일
                'heading-1': ['48px', 'auto'],
                'heading-2': ['36px', 'auto'],
                'heading-3': ['30px', 'auto'],
                'heading-4': ['24px', 'auto'],
                'heading-5': ['20px', 'auto'],
                'heading-6': ['18px', 'auto'],
                // Body
                'body-large': ['18px', '140%'], // Body Large
                'body-base': ['16px', '140%'], // Body Base
                'body-small': ['14px', '140%'], // Body Small
                // Caption
                caption: ['12px', '140%'], // Caption
            },
            colors: {
                primary: {
                    100: '#FFECCC', // container
                    200: '#FFD39A',
                    300: '#FFB466',
                    400: '#FF953F',
                    500: '#FF6501', // 중심색
                    600: '#DB4900',
                    700: '#B73400',
                    800: '#932001',
                    900: '#7A1300', // on container
                },
                success: {
                    100: '#E2FCD9', // container
                    200: '#C1FAB5',
                    300: '#95F18C',
                    400: '#6DE46E',
                    500: '#40D34E', // 중심색
                    600: '#2DB547',
                    700: '#1F9740',
                    800: '#147A39',
                    900: '#0C6535', // on container
                },
                info: {
                    100: '#CBFDFE', // container
                    200: '#98F4FF',
                    300: '#64E4FD',
                    400: '#3FD0FD',
                    500: '#00B0FC', // 중심색
                    600: '#0088D8',
                    700: '#0166B6',
                    800: '#004892',
                    900: '#003478', // on container
                },
                warning: {
                    100: '#FEF6D2', // container
                    200: '#FEEBA6',
                    300: '#FEDC7A',
                    400: '#FECD57',
                    500: '#FCB620', // 중심색
                    600: '#D89417',
                    700: '#B5760F',
                    800: '#92590A',
                    900: '#784506', // on container
                },
                danger: {
                    100: '#FFE8D8', // container
                    200: '#FFCCAF',
                    300: '#FFA988',
                    400: '#FF886A',
                    500: '#FF5139', // 중심색
                    600: '#DB3029',
                    700: '#B91D21',
                    800: '#921221',
                    900: '#7B0B21', // on container
                },
                cool: {
                    100: '#CDD0D3',
                    200: '#B3B6B9',
                    300: '#999C9F',
                    400: '#7F8285',
                    500: '#65686B', // 중심색
                    600: '#4B4E51',
                    700: '#313437',
                    800: '#171A1D',
                    900: '#000000',
                },
                warm: {
                    100: '#D3D0CD',
                    200: '#B9B6B3',
                    300: '#9F9C99',
                    400: '#85827F',
                    500: '#6B6865', // 중심색
                    600: '#514E4B',
                    700: '#373431',
                    800: '#1D1A17',
                    900: '#000000',
                },
                surface: '#000000',
                'surface-bright': '#1A1A1A',
                'surface-container-lowest': '#1A1A1A',
                'surface-container-low': '#343434',
                'surface-container': '#4E4E4E',
                'surface-container-high': '#686868',
                'surface-container-highest': '#828282',
                'on-surface': '#EAEAEA',
                outline: '#828282',
            },
            borderRadius: {
                small: '4px',
                medium: '8px',
                large: '16px',
                xlarge: '24px',
                '2xlarge': '32px',
                full: '9999px',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
};
