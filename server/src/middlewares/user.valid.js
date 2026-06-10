export function CheckRegisterUser(req,res,next) {
    const { userName , email , password } = req.body;
    if(!userName.trim() || !email.trim() || !password.trim()) {
        return res.status(400).json({
            message : "Missing Input Data"
        })
    }

    if(userName.length < 3 && userName.length <= 50) {
        return res.status(400).json({
            message : "Name Too Small"
        })
    }

    if(password.length < 6) {
        return res.status(400).json({
            message : "Password Size Must Greater Than 5"
        })
    }

    if(!email.includes("@")) {
        return res.status(400).json({
            message : "Invalid email"
        })
    }

    req.body.email = email.toLowerCase().trim();
    req.body.userName = userName.trim();
    
    next();
}

export function CheckLoginUser(req,res,next) {
    
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    

    if(!email|| !password) {
        return res.status(400).json({
            message : "Missing Input Data"
        })
    }

    if(password.length < 6) {
        return res.status(400).json({
            message : "Invalid credentials"
        })
    }

    if(!email.includes("@")) {
        return res.status(400).json({
            message : "Invalid credentials"
        })
    }


    req.body.email = email.toLowerCase();
    req.body.password = password;
    
    next();
}

