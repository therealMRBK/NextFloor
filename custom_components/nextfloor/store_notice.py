"""A one-time note for people who installed NextFloor before it joined the official HACS store."""
# ruff: noqa: E501, RUF001

from __future__ import annotations

from datetime import UTC, datetime

from homeassistant.components import persistent_notification
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

NOTICE_ID = f"{DOMAIN}_official_store"
STORAGE_KEY = f"{DOMAIN}.store_notice"
# installs made before this day came in as a custom repository; later ones can only come from the store
STORE_SINCE = datetime(2026, 11, 4, tzinfo=UTC)

TITLE = {
    "en": "NextFloor is now in the official HACS store",
    "de": "NextFloor ist jetzt im offiziellen HACS-Store",
    "fr": "NextFloor est maintenant dans le store HACS officiel",
    "es": "NextFloor ya está en la tienda oficial de HACS",
    "it": "NextFloor è ora nello store ufficiale di HACS",
    "nl": "NextFloor staat nu in de officiële HACS-store",
    "pl": "NextFloor jest teraz w oficjalnym sklepie HACS",
    "pt": "O NextFloor já está na loja oficial do HACS",
    "sv": "NextFloor finns nu i den officiella HACS-butiken",
    "zh": "NextFloor 现已进入 HACS 官方商店",
}

MESSAGE = {
    "en": "Thank you for using NextFloor! You installed it as a custom repository; it is now part of the official HACS store, so new installs just search for *NextFloor* in HACS. **Nothing to do for you:** your installation, plan and settings stay as they are, and updates keep coming through HACS. HACS recognises NextFloor as a regular repository by itself once it has refreshed its list.",
    "de": "Danke, dass du NextFloor nutzt! Du hast es als eigenes Repository installiert; jetzt gehört es zum offiziellen HACS-Store, neue Nutzer suchen einfach nach *NextFloor* in HACS. **Du musst nichts tun:** Installation, Plan und Einstellungen bleiben wie sie sind, Updates kommen weiter über HACS. HACS erkennt NextFloor von selbst als normales Repository, sobald es seine Liste aktualisiert hat.",
    "fr": "Merci d'utiliser NextFloor ! Vous l'avez installé comme dépôt personnalisé ; il fait désormais partie du store HACS officiel, les nouveaux utilisateurs cherchent simplement *NextFloor* dans HACS. **Rien à faire :** votre installation, votre plan et vos réglages restent tels quels, et les mises à jour continuent d'arriver via HACS. HACS reconnaît NextFloor comme un dépôt normal dès qu'il a actualisé sa liste.",
    "es": "¡Gracias por usar NextFloor! Lo instalaste como repositorio personalizado; ahora forma parte de la tienda oficial de HACS y los nuevos usuarios solo buscan *NextFloor* en HACS. **No tienes que hacer nada:** tu instalación, tu plano y tus ajustes siguen igual, y las actualizaciones siguen llegando por HACS. HACS reconoce NextFloor como repositorio normal en cuanto actualice su lista.",
    "it": "Grazie per usare NextFloor! L'hai installato come repository personalizzato; ora fa parte dello store ufficiale di HACS e i nuovi utenti cercano semplicemente *NextFloor* in HACS. **Non devi fare nulla:** installazione, planimetria e impostazioni restano come sono e gli aggiornamenti continuano ad arrivare tramite HACS. HACS riconosce NextFloor come repository normale da solo, dopo aver aggiornato il suo elenco.",
    "nl": "Bedankt voor het gebruik van NextFloor! Je hebt het als eigen repository geïnstalleerd; het hoort nu bij de officiële HACS-store, nieuwe gebruikers zoeken gewoon naar *NextFloor* in HACS. **Je hoeft niets te doen:** installatie, plattegrond en instellingen blijven zoals ze zijn en updates komen nog steeds via HACS. HACS herkent NextFloor zelf als gewone repository zodra de lijst is vernieuwd.",
    "pl": "Dziękujemy za korzystanie z NextFloor! Zainstalowano go jako repozytorium niestandardowe; jest już częścią oficjalnego sklepu HACS, więc nowi użytkownicy po prostu szukają *NextFloor* w HACS. **Nie musisz nic robić:** instalacja, plan i ustawienia pozostają bez zmian, a aktualizacje nadal przychodzą przez HACS. HACS sam rozpozna NextFloor jako zwykłe repozytorium po odświeżeniu listy.",
    "pt": "Obrigado por usar o NextFloor! Você o instalou como repositório personalizado; agora ele faz parte da loja oficial do HACS e os novos usuários só procuram *NextFloor* no HACS. **Você não precisa fazer nada:** instalação, planta e configurações continuam como estão, e as atualizações seguem pelo HACS. O HACS reconhece o NextFloor como repositório normal sozinho depois de atualizar a lista.",
    "sv": "Tack för att du använder NextFloor! Du installerade det som eget arkiv; nu ingår det i den officiella HACS-butiken och nya användare söker bara efter *NextFloor* i HACS. **Du behöver inte göra något:** installation, ritning och inställningar är oförändrade och uppdateringarna kommer fortsatt via HACS. HACS känner själv igen NextFloor som ett vanligt arkiv när listan har uppdaterats.",
    "zh": "感谢使用 NextFloor！你是通过自定义仓库安装的；现在它已进入 HACS 官方商店，新用户直接在 HACS 里搜索 *NextFloor* 即可。**你无需做任何事：**安装、平面图和设置保持不变，更新仍通过 HACS 提供。HACS 刷新列表后会自动把 NextFloor 识别为普通仓库。",
}


def _lang(hass: HomeAssistant) -> str:
    language = (hass.config.language or "en").lower()
    for key in (language, language.split("-")[0]):
        if key in MESSAGE:
            return key
    return "zh" if language.startswith("zh") else "en"


async def async_notify_official_store(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Show the note once, and only for an installation older than the store listing. Returns whether it was shown."""
    created = getattr(entry, "created_at", None)
    if created is None or created >= STORE_SINCE:
        return False
    store: Store[dict[str, bool]] = Store(hass, 1, STORAGE_KEY)
    if (await store.async_load() or {}).get("shown"):
        return False
    lang = _lang(hass)
    persistent_notification.async_create(hass, MESSAGE[lang], title=TITLE[lang], notification_id=NOTICE_ID)
    await store.async_save({"shown": True})
    return True
