// tailwind.config.js
export default {
    theme: {
        extend: {
            colors: {
                dark: '#0f0f0f',
                pcb: '#00ff95',
                tech: '#00c9ff',
                iron: '#c9c9c9',
                lime: '#d4ff00',
                cyan: '#00fff2'
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
                display: ['JetBrains Mono', 'monospace']
            },
            boxShadow: {
                glow: '0 0 12px #00ff95'
            },
            borderRadius: {
                xl: '1rem'
            },
            keyframes: {
                bgFlow: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                }
            },
            animation: {
                bgFlow: 'bgFlow 40s ease infinite'
            },
            backgroundImage: {
                'circuit-gradient': 'radial-gradient(ellipse at 30% 30%, #00ff9530 0%, transparent 80%), radial-gradient(ellipse at 70% 70%, #00fff230 0%, transparent 80%)',
            }
        }
    }
}
