'use client';
 
import { useRouter } from 'next/navigation'
 
export default function AccessDenied() {
  const router = useRouter()
 
  return (
    <div>
    <button type="button" onClick={() => router.back()}>
      Dashboard
    </button>
    </div>
  )
}
