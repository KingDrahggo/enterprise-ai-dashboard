import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <div style="padding: 2rem; color: white;">
        <h2 style="color: var(--primary-glow)">USER MANAGEMENT</h2>
        <p>Active user directory.</p>
        <ul style="margin-top:20px;">
           <li style="padding:10px; border-bottom:1px solid #333">Admin <span style="color:green; float:right">Online</span></li>
           <li style="padding:10px; border-bottom:1px solid #333">System_Bot <span style="color:orange; float:right">Idle</span></li>
           <li style="padding:10px; border-bottom:1px solid #333">Guest_77 <span style="color:gray; float:right">Offline</span></li>
        </ul>
    </div>
  `
})
export class UsersComponent {}
