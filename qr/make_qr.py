# Makes the QR code for the public address of The Digital Malaysian Chinese Literature Centre, then reads it back to confirm it decodes to the same address.
import sys, qrcode
from qrcode.constants import ERROR_CORRECT_Q
from PIL import Image, ImageDraw, ImageFont

URL = "https://cultural-explorer-roan.vercel.app"

qr = qrcode.QRCode(error_correction=ERROR_CORRECT_Q, box_size=24, border=4)   # Q: still scans with about 25% damaged
qr.add_data(URL); qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
img.save("qr/cultural-explorer-qr.png")

# Poster version: QR with the title and the address written underneath, for a slide or a printed sheet
W = img.width + 160
poster = Image.new("RGB", (W, img.height + 330), "white")
poster.paste(img, (80, 150))
d = ImageDraw.Draw(poster)
def font(size, names=("msyhbd.ttc", "msyh.ttc", "arialbd.ttf", "arial.ttf")):
    for n in names:
        try: return ImageFont.truetype(n, size)
        except OSError: pass
    return ImageFont.load_default()
def centre(text, y, f, fill="black"):
    w = d.textlength(text, font=f); d.text(((W - w) / 2, y), text, font=f, fill=fill)
TITLE = "The Digital Malaysian Chinese Literature Centre"
size = 56                                             # the title is long: use the largest size that leaves a margin each side
while d.textlength(TITLE, font=font(size)) > W - 80: size -= 1
centre(TITLE, 32, font(size))
centre("马华文学馆", 96, font(44))
centre("Scan to walk in  扫码参观", img.height + 160, font(44))
centre(URL.replace("https://", ""), img.height + 235, font(36, ("consola.ttf", "arial.ttf")), "#444444")
poster.save("qr/cultural-explorer-qr-poster.png")

print("version", qr.version, "modules", qr.modules_count, "image", img.size, "poster", poster.size)
try:
    import cv2
    for name in ("qr/cultural-explorer-qr.png", "qr/cultural-explorer-qr-poster.png"):
        text, _, _ = cv2.QRCodeDetector().detectAndDecode(cv2.imread(name))
        print(name, "decodes to", repr(text), "MATCH" if text == URL else "MISMATCH")
        if text != URL: sys.exit(1)
except ImportError:
    print("cv2 not installed: decode check skipped")
