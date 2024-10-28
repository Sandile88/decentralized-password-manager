// "use client"
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// type AlertType = 'success' | 'error' | 'info';

// interface Alert {
//     message: string;
//     type: AlertType;
//     id: number;
// }

// interface AlertContextType {
//     alerts: Alert[];
//     showAlert: (message: string, type: AlertType) => void;
//     removeAlert: (id: number) => void;
// }

// const AlertsContext = createContext<AlertContextType | undefined>(undefined);

// export const AlertsProvider = ({ children }: { children: ReactNode }) => {
//     const [alerts, setAlerts] = useState<Alert[]>([]);

//     const showAlert = (message: string, type: AlertType) => {
//         const id = Date.now();
//         setAlerts(prev => [...prev, { message, type, id }]);

//         setTimeout(() => {
//             removeAlert(id);
//         }, 3000);
//     };

//     const removeAlert = (id: number) => {
//         setAlerts(prev => prev.filter(alert => alert.id !== id));
//     };

//     return (
//         <AlertsContext.Provider value={{ alerts, showAlert, removeAlert }}>
//             {children}
//             <div className="fixed top-4 right-4 z-50 space-y-2">
//                 {alerts.map(alert => (
//                     <div
//                         key={alert.id}
//                         className={`px-4 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-between ${
//                             alert.type === 'success' ? 'bg-green-500 text-white' :
//                             alert.type === 'error' ? 'bg-red-500 text-white' :
//                             'bg-blue-500 text-white'
//                         }`}
//                     >
//                         <p>{alert.message}</p>
//                         <button
//                             onClick={() => removeAlert(alert.id)}
//                             className="ml-3 text-white hover:text-gray-200"
//                         >
//                             ×
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </AlertsContext.Provider>
//     );
// };

// export const useAlerts = () => {
//     const context = useContext(AlertsContext);
//     if (context === undefined) {
//         throw new Error('useAlerts must be used within an AlertsProvider');
//     }
//     return context;
// };