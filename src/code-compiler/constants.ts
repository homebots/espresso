export const c_halt = 0xfe; // -
export const c_sysinfo = 0xfd; // -
export const c_restart = 0xfc; // -
export const c_debug = 0xfb; // -
export const c_yield = 0xfa; // -
export const c_dump = 0xf9; // -
export const c_noop = 0x01; // -
export const c_delay = 0x02; // uint32 delay
export const c_print = 0x03; // uint8[] message
export const c_jump = 0x04; // uint32 address
export const c_memget = 0x05; // uint8 slot, int32 address
export const c_memset = 0x06; // int32 address, uint8 slot
export const c_push_b = 0x07; // uint8 slot, int8 value
export const c_push_i = 0x08; // uint8 slot, int32 value
export const c_gt = 0x09; // uint8 slot, uint8 b, uint8 b
export const c_gte = 0x0a; // uint8 slot, uint8 b, uint8 b
export const c_lt = 0x0b; // uint8 slot, uint8 b, uint8 b
export const c_lte = 0x0c; // uint8 slot, uint8 b, uint8 b
export const c_equal = 0x0d; // uint8 slot, uint8 b, uint8 b
export const c_notequal = 0x0e; // uint8 slot, uint8 b, uint8 b
export const c_jumpif = 0x0f; // uint8 slot, uint32 address
export const c_xor = 0x10; // uint8 slot, uint8 a, uint8 b
export const c_and = 0x11; // uint8 slot, uint8 a, uint8 b
export const c_or = 0x12; // uint8 slot, uint8 a, uint8 b
export const c_not = 0x13; // uint8 slot
export const c_inc = 0x14; // uint8 slot
export const c_dec = 0x15; // uint8 slot
export const c_add = 0x16; // uint8 slot, uint8 slot
export const c_sub = 0x17; // uint8 slot, uint8 slot
export const c_mul = 0x18; // uint8 slot, uint8 slot
export const c_div = 0x19; // uint8 slot, uint8 slot
export const c_mod = 0x1a; // uint8 slot, uint8 slot
export const c_copy = 0x1b; // uint8 dest, uint8 src
export const c_delay_v = 0x1c; // uint8 slot
export const c_iowrite = 0x31; // uint8 pin, uint8 slot
export const c_ioread = 0x32; // uint8 slot, uint8 pin
export const c_iomode = 0x35; // uint8 pin, uint8 slot
export const c_iotype = 0x36; // uint8 pin, uint8 slot
export const c_ioallout = 0x37; // -
export const c_wificonnect = 0x3a; // uint8 pin, uint8 slot
export const c_wifidisconnect = 0x3b; // uint8 pin, uint8 slot
export const c_wifistatus = 0x3c; // uint8 pin, uint8 slot
export const c_wifilist = 0x3e; // uint8 pin, uint8 slot
export const c_sleep = 0x3f; // uint8 mode, uint32 time
export const c_i2setup = 0x40; // -
export const c_i2start = 0x41; // -
export const c_i2stop = 0x42; // -
export const c_i2write = 0x43; // uint8 byte
export const c_i2read = 0x44; // uint8 slot
export const c_i2setack = 0x45; // uint8 byte
export const c_i2getack = 0x46; // uint8 byte
export const c_i2find = 0x48; // uint8 slot
export const c_i2writeack = 0x49; // uint32 length, uint* bytes
export const c_i2writeack_b = 0x4a; // uint8 byte
