from playwright.sync_api import sync_playwright
import json

def test_website():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        
        errors = []
        console_errors = []
        
        # Capture console errors
        def handle_console(msg):
            if msg.type in ["error", "warning"]:
                console_errors.append(f"[{msg.type}] {msg.text}")
        
        page.on("console", handle_console)
        
        # Capture page errors
        def handle_page_error(error):
            errors.append(str(error))
        
        page.on("pageerror", handle_page_error)
        
        pages_to_test = [
            ("home", "/"),
            ("about", "/about"),
            ("services", "/services"),
            ("services-content", "/services/content-creation"),
            ("services-social", "/services/social-media"),
            ("services-performance", "/services/performance-marketing"),
            ("services-branding", "/services/branding"),
            ("services-ai", "/services/ai-solutions"),
            ("services-crm", "/services/crm-automation"),
            ("work", "/work"),
            ("work-aaloki", "/work/aaloki-brand-launch"),
            ("work-malabar", "/work/malabar-performance"),
            ("contact", "/contact"),
        ]
        
        for name, path in pages_to_test:
            try:
                page.goto(f"http://localhost:3000{path}", wait_until="networkidle")
                page.wait_for_timeout(1000)
                page.screenshot(path=f"C:/Users/PRASHANT/AppData/Local/Temp/screenshot-{name}.png", full_page=True)
                print(f"✓ {name} - captured")
            except Exception as e:
                print(f"✗ {name} - error: {e}")
        
        # Test mobile view
        page.set_viewport_size({"width": 375, "height": 812})
        page.goto("http://localhost:3000", wait_until="networkidle")
        page.wait_for_timeout(1000)
        page.screenshot(path="C:/Users/PRASHANT/AppData/Local/Temp/screenshot-mobile-home.png", full_page=True)
        print("✓ mobile home - captured")
        
        page.goto("http://localhost:3000/about", wait_until="networkidle")
        page.wait_for_timeout(1000)
        page.screenshot(path="C:/Users/PRASHANT/AppData/Local/Temp/screenshot-mobile-about.png", full_page=True)
        print("✓ mobile about - captured")
        
        browser.close()
        
        print("\n=== ERRORS ===")
        for e in errors:
            print(f"PAGE ERROR: {e}")
        
        print("\n=== CONSOLE ERRORS ===")
        for e in console_errors:
            print(e)
        
        if not errors and not console_errors:
            print("No errors found!")

test_website()
