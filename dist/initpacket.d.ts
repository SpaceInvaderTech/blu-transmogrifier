/// <reference types="node" />
import type { KeyObject } from 'node:crypto';
import { dfu } from './protobuf/dfu';
type InitCommandParameters = NonNullable<Parameters<typeof dfu.InitCommand.create>[0]>;
export type MakeInitPacketProps = Pick<InitCommandParameters, 'appSize' | 'fwVersion' | 'hwVersion' | 'sdReq' | 'isDebug'> & {
    privateKey: KeyObject;
    firmwareHash: NonNullable<InitCommandParameters['hash']>['hash'];
    verify?: boolean;
};
export default function makeInitPacket({ firmwareHash, // hash of the firmware
appSize, // application size
privateKey, // private key for signing
fwVersion, // firmware version
hwVersion, // required hardware version
sdReq, // Allowed versions of the SoftDevice
isDebug, // whether the firmware is a debug build
verify, }: MakeInitPacketProps): Uint8Array;
export {};
