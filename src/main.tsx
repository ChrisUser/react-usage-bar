import React from 'react'
import ReactDOM from 'react-dom/client'
import UsageBar from '../lib/UsageBar'

const App = () => {
    const itemsToDisplay = [
        {
            name: 'UI',
            value: 10,
            color: '#000000'
        },
        {
            name: 'Photos',
            value: 30
        },
        {
            name: 'Videos',
            value: 15
        },
        {
            name: 'System Data',
            value: 33
        },
        {
            name: 'Other',
            value: 8
        }
    ]

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 32, width: '100%', marginTop: 24 }}>
            <div style={{ padding: '24px 0', width: '60%' }}>
                <UsageBar showFallbackColors items={itemsToDisplay} total={100} />
            </div>
            <div style={{ padding: '24px 0', width: '60%' }}>
                <UsageBar showFallbackColors compactLayout items={itemsToDisplay} total={100} />
            </div>
            <div style={{ padding: '24px 0', width: '60%' }}>
                <UsageBar showFallbackColors compactLayout showLabels={false} items={itemsToDisplay} total={100} />
            </div>
            <div style={{ padding: '24px 0', width: '60%' }}>
                <UsageBar darkMode showFallbackColors compactLayout showLabels={false} items={itemsToDisplay} total={100} />
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
