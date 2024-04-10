import {User} from '@/types/User';

export default function formatRole(role: User['role']) {
    switch (role) {
      case 'ADMIN':
        return 'Admin';
      case 'LINEMANAGER':
        return 'Line Manager';
      case 'FINANCE':
        return 'Finance';
      default:
        return 'Employee';
    }
  }