declare module 'sonos' {
    export class Sonos {
        constructor(host: string, port?: number);
        getVolume(): Promise<number>;
        setVolume(volume: number): Promise<void>;
        getMuted(): Promise<boolean>;
        setMuted(muted: boolean): Promise<void>;
        getAllGroups(): Promise<SonosGroup[]>;
    }

    export interface SonosGroup {
        Name: string;
        host: string;
        port: number;
        Coordinator: string;
        ZoneGroupMember: ZoneGroupMember[];
    }

    export interface ZoneGroupMember {
        UUID: string;
        ZoneName: string;
        Location: string;
    }

    export class AsyncDeviceDiscovery {
        discover(options?: { timeout?: number }): Promise<Sonos>;
    }
}