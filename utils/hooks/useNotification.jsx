'use client';
import { createContext, useContext, useRef, useState } from "react"; 
import Icon from "../../components/Icon";

const NotificationContext = createContext(null);

export default function useNotification() {
    const notify = useContext(NotificationContext);
    return notify;
}

export function NotificationProvider({
    children
}) { 
    // const [isShow, setIsShow] = useState(false); // This should be an array of notifications
    const [notiList, setNotiList] = useState([]);
    const notiRef = useRef([]);
    const timeoutId = useRef(0);
    let uuid = 0;

    function pushNotification(noti) {
        notiRef.current = [
            ...notiList,
            noti
        ];
        setNotiList(notiRef.current);

        timeoutId.current = setTimeout(() => {
            notiRef.current = notiRef.current.slice(1)
            setNotiList(notiRef.current);
        }, 4000);
    }

    return (
        <NotificationContext.Provider value={pushNotification}>
            {children}
            {notiList.length > 0 &&
                <ul className="fixed top-10 right-10 flex flex-col gap-2 z-50">
                {notiList.map(ntfn => 
                    <li key={uuid++}>
                        <Notification
                            text={ntfn.text}
                            type={ntfn.type}
                        />
                    </li>    
                )}
                </ul>
            }
        </NotificationContext.Provider>
    )
}
 
function Notification({
    text,
    type  // 'info' | 'danger' | 'error' | 'success',
}) {
    let className = "animation-bounce-in-right animation-bounce-out-up flex flex-col gap-1 w-80 px-2 py-2 border-2 text-gray-700 font-semibold rounded-md "
    let title;
    let icon = <Icon name="circle-info text-[#1abc9c]" />

    if (type == "info") {
        className += " bg-blue-100";
        icon = <Icon name="circle-info text-[#3498db]" size="lg" />;
        title = <span className="text-[#3498db]">Info</span>
    } else if (type == "danger") {
        className += " bg-yellow-100";
        icon = <Icon name="triangle-exclamation text-[#e67e22]" size="lg" />;
        title = <span className="text-[#e67e22]">Danger</span>
    } else if (type == "success") {
        className += " bg-green-100"; 
        icon = <Icon name="circle-check text-[#1abc9c]" size="lg" />;
        title = <span className="text-[#1abc9c]">Success</span>
    } else {
        className += " bg-red-100"; 
        icon = <Icon name="circle-xmark text-[#c0392b]" size="lg"  />;
        title = <span className="text-[#c0392b]">Error</span>
    }

    return (
        <div className={className}>
            <div className="flex gap-2"><span>{icon}</span> {title}</div>
            <p className="pl-7">{text}</p>
        </div>
    )
}