package com.yanway;

import android.os.Handler;
import android.view.View;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class ImmersiveMode extends ReactContextBaseJavaModule {
    Handler uiHandler;

    @Override
    public String getName() {
        return "ImmersiveMode";
    }

    public ImmersiveMode(ReactApplicationContext reactContext) {
        super(reactContext);
        this.uiHandler = new Handler(reactContext.getMainLooper());
    }

    @ReactMethod
    public void enterImmersiveMode(){
        uiHandler.post(runnableEnterImmersiveMode);
    }

    @ReactMethod
    public void exitImmersiveMode(){
        uiHandler.post(runnableExitImmersiveMode);
    }

    private Runnable runnableEnterImmersiveMode = new Runnable() {
        @Override
        public void run() {
            setSystemUIFlags(
                    View.SYSTEM_UI_FLAG_IMMERSIVE
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_FULLSCREEN
            );
        }
    };

    private Runnable runnableExitImmersiveMode = new Runnable() {
        @Override
        public void run() {
            setSystemUIFlags(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            );
        }
    };

    private void setSystemUIFlags(int visibility){
        View decorView = getCurrentActivity().getWindow().getDecorView();
        decorView.setSystemUiVisibility(visibility);
    }
}
