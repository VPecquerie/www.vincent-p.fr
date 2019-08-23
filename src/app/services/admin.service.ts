import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Deserialize } from 'cerialize';
import { User } from '../models/entities/user';
@Injectable()
export class AdminService {

    public isSidebarCollapsed = false;

    constructor() {
    }

}
