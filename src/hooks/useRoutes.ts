'use client';
import { useAppSelector } from "@/store/store"

const useRoutes = () => {
    const routes = useAppSelector(s => s.app.routes)
    return routes
}

export default useRoutes