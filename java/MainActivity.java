package {{APP_ID}};

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebSettings;
import android.webkit.PermissionRequest;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.net.Uri;
import android.content.Intent;

public class MainActivity extends Activity {
	
	public static boolean flag = false;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	    setContentView(R.layout.activity_main);
		WebView webView = (WebView) findViewById(R.id.web);
		
		webView.getSettings().setJavaScriptEnabled(true);
		webView.getSettings().setUseWideViewPort(true);
		webView.getSettings().setLoadWithOverviewMode(true);
		webView.getSettings().setDomStorageEnabled(true);
		webView.getSettings().setSupportMultipleWindows(true);
		webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
		webView.getSettings().setAllowFileAccessFromFileURLs(true);
		webView.getSettings().setAllowUniversalAccessFromFileURLs(true);
		webView.getSettings().setAllowFileAccess(true);
		webView.getSettings().setAllowContentAccess(true);
		webView.getSettings().setDatabaseEnabled(true);
		webView.getSettings().setMediaPlaybackRequiresUserGesture(false);
		if (Build.VERSION.SDK_INT < 18) {
		webView.getSettings().setRenderPriority(WebSettings.RenderPriority.HIGH);
		}
		webView.setWebChromeClient(new WebChromeClient() {

        @Override
        public void onPermissionRequest(final PermissionRequest request) {
            MainActivity.this.runOnUiThread(new Runnable() {
                @TargetApi(Build.VERSION_CODES.M)
                @Override
                public void run() {
                    request.grant(request.getResources());
                }
            });
        }
		});
		webView.setWebViewClient(new WebViewClient() {
			@Override
			public boolean shouldOverrideUrlLoading(WebView view, String url) {
				if (url.startsWith("tel:") || url.startsWith("whatsapp:")) {
					Intent intent = new Intent(Intent.ACTION_VIEW);
					intent.setData(Uri.parse(url));
					startActivity(intent);
					view.goBack();
					return true;
				}
				if (url.contains("#") && flag == false) {
					view.loadUrl(url);
					flag = true;
					} else {
					view.loadUrl(url);
					flag = true;
				}
				return true;
				
			}
		});
		
		if (savedInstanceState != null) {
			webView.restoreState(savedInstanceState);
			} else {
			webView.loadUrl("file:///android_asset/index.html");
		}
	}
	
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		
		WebView webView = (WebView) findViewById(R.id.web);
		
		if (event.getAction() == KeyEvent.ACTION_DOWN) {
			switch (keyCode) {
				case KeyEvent.KEYCODE_BACK:
				if (webView.canGoBack()) {
					webView.goBack();
					} else {
					finish();
				}
				return true;
			}
			
		}
		return super.onKeyDown(keyCode, event);
	}
	
	@Override
	protected void onSaveInstanceState(Bundle outState) {
		WebView webview = (WebView) findViewById(R.id.web);
		
		super.onSaveInstanceState(outState);
		webview.saveState(outState);
	}
	
	@Override
	protected void onRestoreInstanceState(Bundle savedInstanceState) {
		WebView webview = (WebView) findViewById(R.id.web);
		
		super.onRestoreInstanceState(savedInstanceState);
		webview.restoreState(savedInstanceState);
	}
	
}