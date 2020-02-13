import installExtension, { ExtensionReference, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

export default async (extensions: Array<ExtensionReference> = [REACT_DEVELOPER_TOOLS]): Promise<void> => {
    for (const index in extensions) {
        try {
            await installExtension(extensions[index])
        } catch (e) {
            console.error(e)
        }
    }
};