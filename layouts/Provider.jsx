import { AuthProvider } from "@/utils/hooks/useAuth"
import { LoadingProvider } from "@/utils/hooks/useLoadingAnimation"
import { NotificationProvider } from "@/utils/hooks/useNotification"
 

export default function Provider({
    children
}) {
    return (
        <AuthProvider>
        <NotificationProvider>
        <LoadingProvider>
            <div style={{minHeight:"600px"}}>{children}</div>
        </LoadingProvider>
        </NotificationProvider>
        </AuthProvider>
    )
}